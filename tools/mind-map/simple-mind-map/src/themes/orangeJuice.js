import defaultTheme from './default'
import merge from 'deepmerge'

// 橙汁
export default merge(defaultTheme, {
  // 背景颜色
  backgroundColor: '#070616',
  // 连线的颜色
  lineColor: '#fff',
  lineWidth: 3,
  // 概要连线的粗细
  generalizationLineWidth: 3,
  // 概要连线的颜色
  generalizationLineColor: '#fff',
  // 根节点样式
  root: {
    fillColor: '#ff6811',
    color: '#110501',
    borderColor: '#ff6811',
    borderWidth: 0,
    fontSize: 24,
    active: {
      borderColor: '#a9a4a9',
      borderWidth: 3
    }
  },
  // 二级节点样式
  second: {
    fillColor: '#070616',
    color: '#a9a4a9',
    borderColor: '#ff6811',
    borderWidth: 2,
    fontSize: 18,
    active: {
      borderColor: '#110501'
    }
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: '#a9a4a9',
    active: {
      borderColor: '#ff6811'
    }
  },
  // 概要节点样式
  generalization: {
    fontSize: 14,
    fillColor: '',
    borderColor: '#ff6811',
    borderWidth: 2,
    color: '#a9a4a9',
    active: {
      borderColor: '#110501'
    }
  }
})
