const fs = require('fs');
const readline = require('readline');

function generateListHTML(json) {
  const definition = JSON.parse(fs.readFileSync(`sheet_definitions/${json}`));
  const variants = definition.variants
  const name = definition.name
  const typeName = definition.type_name

  var requiredSexes = [];
  var previewRow = 10;
  if (definition.preview_row !== undefined) {
    previewRow = definition.preview_row
  }
  if (definition.layer_1.male !== undefined) {
    requiredSexes.push("male");
  }
  if (definition.layer_1.female !== undefined) {
    requiredSexes.push("female");
  }
  if (definition.layer_1.teen !== undefined) {
    requiredSexes.push("teen");
  }
  if (definition.layer_1.child !== undefined) {
    requiredSexes.push("child");
  }
  if (definition.layer_1.muscular !== undefined) {
    requiredSexes.push("muscular");
  }
  if (definition.layer_1.pregnant !== undefined) {
    requiredSexes.push("pregnant");
  }

  const requiredSex = requiredSexes.join(",");

  const startHTML = `<li data-required="[REQUIRED_SEX]"><span class="condensed">${name}</span><ul>`.replace("[REQUIRED_SEX]", requiredSex);
  const templateHTML = fs.readFileSync("scripts/template-general.html", 'utf8');

  const endHTML = '</ul></li>';

  var idx = 0;
  var listItemsHTML = `<li><input type="radio" id="${typeName}-none" name="${typeName}"> <label for="${typeName}-none">No ${typeName}</label></li>`;
  for (variant in variants) {
    const itemName = variants[idx];
    const itemIdFor = typeName + "-" + name.replaceAll(" ", "_") +  "_" + itemName.replaceAll(" ", "_");
    var matchBodyColor = false;
    if (definition[`match_body_color`] !== undefined) {
      matchBodyColor = true;
    }
    var dataFiles = "";
    var sexIdx = 0;
    for (sex in requiredSexes) {
      for (jdx =1; jdx < 10; jdx++) {
        const layerDefinition = definition[`layer_${jdx}`];
        if (layerDefinition !== undefined) {
          if (sexIdx === 0) {
            const zPos = definition[`layer_${jdx}`].zPos;
            dataFiles += "data-preview_row=" + previewRow + " data-layer_" + jdx + "_zpos=" + zPos + " ";
            const custom_animation = layerDefinition.custom_animation;
            if (custom_animation !== undefined) {
              dataFiles += `data-layer_${jdx}_custom_animation=` + custom_animation + " "
            }
          }
          const file = layerDefinition[requiredSexes[sexIdx]]
          if (file !== null && file !== "") {
            dataFiles += "data-layer_" + jdx + "_" + requiredSexes[sexIdx] + "=\"" + file + itemName.replaceAll(" ", "_") + ".png\" ";
          }
        } else {
          break;
        }
      }
      sexIdx += 1;
    }
    listItemsHTML += templateHTML
      .replaceAll("[ID_FOR]", itemIdFor)
      .replaceAll("[TYPE_NAME]", typeName)
      .replaceAll("[NAME]", itemName)
      .replaceAll("[PARENT_NAME]", name)
      .replaceAll("[MATCH_BODY_COLOR]", matchBodyColor)
      .replaceAll("[VARIANT]", itemName)
      .replaceAll("[DATA_FILE]", dataFiles);
    idx += 1;
  }
  return startHTML + listItemsHTML + endHTML;
}

var lineReader = require('readline').createInterface({
  input: fs.createReadStream('source_index.html')
});
var htmlGenerated = '<!-- THIS FILE IS AUTO-GENERATED. PLEASE DONT ALTER IT MANUALLY -->\n';

lineReader.on('line', function (line) {
  if (line.includes('div_sheet_')) {
    const definition = line.replace("div_sheet_","");
    const newLine = generateListHTML(`${definition}.json`.replaceAll("\t", ""))
    htmlGenerated+=newLine+"\n";
  } else {
    htmlGenerated+=line+"\n";
  }
});

lineReader.on('close', function (line) {
  fs.writeFile('index.html', htmlGenerated, function(err) {
            if (err) {
                return console.log(err);
            } else {
                console.log('Updated!');
            }
    });
});
