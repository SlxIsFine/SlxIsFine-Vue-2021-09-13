const baseUrl = "http://47.93.3.182:8080/api/v1"
const file = baseUrl + "/file"
const captcha = baseUrl + "/captcha"
const user = baseUrl + "/user"
const goods = baseUrl + "/goods"
const nft = baseUrl + "/nft"
const order = baseUrl + "/order"

export default {
    // 上传文件接口
    file: {
        // 上传使用url的文件
        uploadUrlFile: file + "/uploadUrlFile",
        // 上传使用ipfs的文件
        uploadIpfsFile: file + "/uploadIpfsFile"

    },
    // 验证码接口
    captcha: {
        // 获取图片验证码
        getCaptcha: captcha + "/getCaptcha",
        // 验证图片验证码
        verifyCaptcha: captcha + "/verifyCaptcha"

    },
    // 验证用户信息接口
    checkUser: {
        // 检查用户名是否合法
        checkName: user + "/check/checkName",
        // 验证邮箱可用且未被注册
        checkEmail: user + "/check/checkEmail",
        // 返回邮箱验证码
        verifyEmail: user + "/check/verifyEmail",
        // 验证手机号合法
        checkPhone: user + "/check/checkPhone",
        // 返回手机验证码
        verifyPhone: user + "/check/verifyPhone",
        // 实名验证
        checkReal: user + "/check/checkReal",
    },
    // 用户注册接口
    registerUser: {
        // 账号密码注册
        ByPassword: user + "/register/ByPassword",
        // 微信注册
        ByWeChat: user + "/register/ByWeChat"
    },
    // 用户登录
    loginUser: {
        // 账号密码登录
        ByPassword: user + "/login/ByPassword",
        // 短信验证码登录
        BySms: user + "/login/BySms",
        // 手机验证码验证
        verifySms: user + "/login/verifySms",
        // 微信登录
        ByWechat: user + "/login/ByWechat"
    },
    // 查看用户信息
    userInfo: {
        // 查看用户信息表
        getUserInfo: user + "/info/getUserInfo",
        // 查看某用户信息
        getOtherUserInfo: user + "/info/getOtherUserInfo"
    },
    // 修改用户信息
    updateUser: {
        // 修改用户信息
        updateUserInfo: user + "/info/updateUserInfo"
    },
    // 找回密码
    findPassword: {
        // 通过电话找回密码
        ByPhone: user + "/find/ByPhone",
        // 验证电话验证码
        verifyPhone: user + "/find/verifyPhone",
        // 修改密码
        updatePassword: user + "/find/updatePassword"
    },
    // 地址管理
    address: {
        // 上传用户保管私钥的地址
        addExistAddress: user + "/address/addExistAddress",
        // 修改默认地址
        changeDefaultAddress: user + "/address/changeDefaultAddress"
    },
    // 商品收藏
    goodsCollection: {
        // 收藏商品
        collectGoods: goods + "/collection/collectGoods",
        // 获取用户收藏的商品
        queryAllGoods: goods + "/collection/queryAllGoods",
        // 获取用户收藏的NFT模板
        queryAllNFT: goods + "/collection/queryAllNFT"
    },
    // 查看商品信息
    goodsInfo: {
        // 获取商品信息
        getGoodsInfo: goods + "/Info/getGoodsInfo"
    },
    // 查看用户拥有的商品信息
    ownGoodsInfo: {
        queryAllGoods: goods + "/own/queryAllGoods",
        // 获取用户拥有的NFT模板
        queryAllNFT: goods + "/own/queryAllNFT"
    },
    // NFT发行
    publishNFT: {
        // 发布NFT
        publishNFT: nft + "/publish/publishNFT",
        // 签名NFT
        signNFT: nft + "/publish/signNFT",
        // 创建一个NFT草稿
        createDraft: nft + "/publish/createDraft",
        // 获取所有NFT草稿
        queryAllDraft: nft + "/publish/queryAllDraft"
    },
    // 查询NFT信息
    nftInfo: {
        // 根据NFT模板Id获取NFT模板信息
        getByTemplateId: nft + "/info/getByTemplateId",
        // 获取NFT模板下所有的GoodsId
        getGoodsId: nft + "/info/getGoodsId"
    },
    // 商品首次定价发售
    fixPricePublishNFT: {
        // 首次定价发售商品
        createOrder: order + "/publish/fixPrice/createOrder",
        // 签名订单
        signOrder: order + "/publish/fixPrice/signOrder"
    },
    // 商品拍卖发售
    auctionPublishNFT: {
        // 首次拍卖发售商品
        createOrder: order + "/publish/auction/createOrder",
        // 签名订单
        signOrder: order + "/publish/auction/signOrder"
    },
    // 商品定价转卖
    fixPriceSellNFT: {
        // 定价出售持有的某个NFT
        createOrder: order + "/sell/fixPrice/createOrder",
        // 签名订单
        signOrder: order + "/sell/fixPrice/signOrder",
        // 查询订单信息
        queryOrder: order + "/sell/fixPrice/queryOrder",
        // 查询用户所有定价出售订单
        queryAllOrder: order + "/sell/fixPrice/queryAllOrder"
    },
    // 商品拍卖转卖
    auctionSellNFT: {
        // 拍卖出售持有的某个NFT
        createOrder: order + "/sell/auction/createOrder",
        // 签名订单
        signOrder: order + "/sell/auction/signOrder",
        // 查询订单信息
        queryOrder: order + "/sell/auction/queryOrder",
        // 查询用户所有拍卖出售订单
        queryAllOrder: order + "/sell/auction/queryAllOrder"
    },
    // 商品定价购买
    fixPriceBuyNFT: {
        // 定价购买某个NFT
        createOrder: order + "/buy/fixPrice/createOrder",
        // 查询定价购买订单信息
        queryOrder: order + "/buy/fixPrice/queryOrder",
        // 查询用户所有定购订单信息
        queryAllOrder: order + "/buy/fixPrice/queryAllOrder"
    },
    // 商品拍卖购买
    auctionBuyNFT: {
        // 拍卖出售持有的某个NFT
        createOrder: order + "/buy/auction/createOrder",
        // 查询订单信息
        queryOrder: order + "/buy/auction/queryOrder",
        // 查询用户所有拍卖出售订单
        queryAllOrder: order + "/buy/auction/queryAllOrder"
    },
    // 提现订单
    withdraw: {
        // 用户对余额发起提现
        createOrder: order + "/withdraw/createOrder",
        // 查询提现订单信息
        queryOrder: order + "/withdraw/queryOrder",
        // 查询用户所有提现订单信息
        queryAllOrder: order + "/withdraw/queryAllOrder"
    }
}
