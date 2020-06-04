
Page({

  data: {
    pinzhi: [
      {
        id: 1,
        value: '五星餐厅',
        is: false
      },
      {
        id: 1,
        value: '五星餐厅',
        is: false
      },
      {
        id: 1,
        value: '五星餐厅',
        is: false
      },
      {
        id: 1,
        value: '五星餐厅',
        is: false
      },
    ],
    youhui: [
      {
        id: 1,
        value: '促销',
        smallVal: '优惠厅',
        is: false
      },
      {
        id: 1,
        value: '促销',
        smallVal: '优惠厅',
        is: false
      },
      {
        id: 1,
        value: '促销',
        smallVal: '优惠厅',
        is: false
      },
      {
        id: 1,
        value: '促销',
        smallVal: '优惠厅',
        is: false
      },
    ],
    yongcanshijian: [
      {
        id: 1,
        value: '下午茶',
        is: false
      },
      {
        id: 1,
        value: '下午茶',
        is: false
      },
      {
        id: 1,
        value: '下午茶',
        is: false
      },
      {
        id: 1,
        value: '下午茶',
        is: false
      },
    ],
  },

  // 品质
  headelsclick(e) {
    const index = e.currentTarget.dataset.index;
    let pinzhiArr = this.data.pinzhi;
    // 取反
    pinzhiArr[index].is = !pinzhiArr[index].is;
    // 重新渲染数据
    this.setData({
      pinzhi: pinzhiArr
    })
  },
  // 优惠
  youhuiClick(e) {
    const index = e.currentTarget.dataset.index;
    let youhuiArr = this.data.youhui;
    // 取反
    youhuiArr[index].is = !youhuiArr[index].is;
    // 重新渲染数据
    this.setData({
      youhui: youhuiArr
    })
  },
  // 用餐时间
  yongcanshijianClick(e) {
    const index = e.currentTarget.dataset.index;
    let yongcanshijian = this.data.yongcanshijian;
    // 取反
    yongcanshijian[index].is = !yongcanshijian[index].is;
    // 重新渲染数据
    this.setData({
      yongcanshijian: yongcanshijian
    })
  },
  // 重置
  reset() {
    let pinzhiArr = this.data.pinzhi;
    let youhuiArr = this.data.youhui;
    let yongcanshijian = this.data.yongcanshijian;
    // 全部变为false
    pinzhiArr.forEach((v, k) => {
      v.is = false;
    });
    youhuiArr.forEach((v, k) => {
      v.is = false;
    });
    yongcanshijian.forEach((v, k) => {
      v.is = false;
    });
    this.setData({
      pinzhi: pinzhiArr
    })
    this.setData({
      youhui: youhuiArr
    })
    this.setData({
      yongcanshijian: yongcanshijian
    })

    console.log("重置成功");
  },

  // 确定提交
  submit(e) {
  }
})