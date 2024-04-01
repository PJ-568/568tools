try{
    translate.listener.start();
    translate.language.setLocal('chinese_simplified');
    translate.setAutoDiscriminateLocalLanguage();
    translate.language.setUrlParamControl();
    translate.ignore.class.push('notTranslate');
    translate.nomenclature.append('chinese_simplified','english',`
        哈姆语言之书=Hamud Book
        哈姆语=the language of Hamud
        哈姆德=the Hamud
        哈姆人=hamud
        哈姆=Hamud
        哈约·姆经=Hamud the Bible
        哈经·姆约=Hamud the Bible
        哈经=Hamud
        姆约=the Bible
        哈约=the Byble
    `);
}
catch(e){console.log(e);}
translate.execute();