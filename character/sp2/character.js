const characters = {
	matie: ["male", "qun", 4, ["dczhuiwang", "dcquxian"]],
	hansong: ["male", "qun", 3, ["dcyinbi", "dcshuaiyan"]],
	chezhou: ["male", "wei", 4, ["dcshefu", "dcpigua"]],
	star_xunyu: ["male", "wei", 3, ["staranshu", "starkuangzuo"], ["clan:颍川荀氏"]],
	star_zhangzhao: ["male", "wu", 3, ["starzhongyan", "starjinglun"]],
	star_sunjian: ["male", "qun", "4/5", ["starruijun", "stargangyi"]],
	liqueguosi: ["male", "qun", 4, ["xiongsuan"], ["name:李|傕-郭|汜"]],
	star_zhangchunhua: ["female", "wei", 3, ["starliangyan", "starminghui"]],
	star_yuanshao: ["male", "qun", 4, ["starxiaoyan", "starzongshi", "starjiaowang", "staraoshi"], ["zhu"]],
	star_dongzhuo: ["male", "qun", 5, ["starweilin", "starzhangrong", "starhaoshou"], ["zhu"]],
	star_yuanshu: ["male", "qun", 4, ["starcanxi", "starpizhi", "starzhonggu"], ["zhu"]],
	star_caoren: ["male", "wei", 4, ["starsujun", "starlifeng"]],
	star_sunshangxiang: ["female", "wu", 3, ["starsaying", "starjiaohao"]],
	dc_jikang: ["male", "wei", 3, ["new_qingxian", "dcjuexiang"]],
	dc_jsp_guanyu: ["male", "wei", 4, ["new_rewusheng", "dcdanji"]],
	dc_mengda: ["male", "wei", 4, ["dclibang", "dcwujie"]],
	//dc_fuwan:['male','qun',4,['dcmoukui']],
	guānning: ["male", "shu", 3, ["dcxiuwen", "longsong"]],
	sunhuan: ["male", "wu", 4, ["dcniji"]],
	sunlang: ["male", "shu", 4, ["dctingxian", "dcbenshi"]],
	shiyi: ["male", "wu", 3, ["dccuichuan", "dczhengxu"]],
	dc_hujinding: ["female", "shu", "3/6", ["dcdeshi", "dcwuyuan", "huaizi"]],
	liyixiejing: ["male", "wu", 4, ["dcdouzhen"], ["name:李|异-谢|旌"]],
	mushun: ["male", "qun", 4, ["dcjinjian", "dcshizhao"]],
	dc_zhaoyǎn: ["male", "wei", 3, ["dcfuning", "dcbingji"]],
	wangwei: ["male", "qun", 4, ["dcruizhan", "dcshilie"]],
	dc_huban: ["male", "wei", 4, ["dcchongyi"]],
	niufu: ["male", "qun", "4/7", ["dcxiaoxi", "xiongrao"]],
	bianxi: ["male", "wei", 4, ["dunxi"]],
	fengfang: ["male", "qun", 3, ["dcditing", "dcbihuo"]],
	qinyilu: ["male", "qun", 3, ["piaoping", "tuoxian", "chuaili"]],
	yanrou: ["male", "wei", 4, ["choutao", "xiangshu"]],
	dc_zhuling: ["male", "wei", 4, ["dczhanyi"]],
	licaiwei: ["female", "wei", 3, ["yijiao", "qibie"]],
	yanfuren: ["female", "qun", 3, ["channi", "nifu"], ["name:严|null"]],
	haomeng: ["male", "qun", 7, ["xiongmang"]],
	re_pangdegong: ["male", "qun", 3, ["heqia", "yinyi"]],
	hanmeng: ["male", "qun", 4, ["jieliang", "quanjiu"]],
	xinping: ["male", "qun", 3, ["fuyuan", "zhongjie", "yongdi"]],
	zhangning: ["female", "qun", 3, ["tianze", "difa"]],
	tongyuan: ["male", "qun", 4, ["chaofeng", "chuanshu"]],
	sp_mifangfushiren: ["male", "shu", 4, ["fengshi"], ["name:糜|芳-傅|士仁"]],
	re_nanhualaoxian: ["male", "qun", 4, ["gongxiu", "jinghe"], ["name:庄|周"]],
	dufuren: ["female", "wei", 3, ["yise", "shunshi"], ["name:杜|null"]],
	caoanmin: ["male", "wei", 4, ["xianwei"]],
	re_zoushi: ["female", "qun", 3, ["rehuoshui", "reqingcheng"], ["name:邹|null"]],
	qiuliju: ["male", "qun", "4/6", ["koulve", "qljsuiren"]],
	re_hucheer: ["male", "qun", 4, ["redaoji", "fuzhong"]],
	re_dongcheng: ["male", "qun", 4, ["xuezhao"]],
	tangji: ["female", "qun", 3, ["kangge", "jielie"], ["name:唐|null"]],
	zhangheng: ["male", "qun", 8, ["dangzai", "liangjue"]],
	duanwei: ["male", "qun", 4, ["junklangmie"]],
	re_niujin: ["male", "wei", 4, ["recuorui", "reliewei"]],
	zhangmiao: ["male", "qun", 4, ["mouni", "zongfan"]],
	liangxing: ["male", "qun", 4, ["lulve", "lxzhuixi"]],
	caosong: ["male", "wei", 4, ["cslilu", "csyizheng"]],
	re_taoqian: ["male", "qun", 3, ["zhaohuo", "reyixiang", "reyirang"]],
	zhaozhong: ["male", "qun", 6, ["yangzhong", "huangkong"]],
	hanfu: ["male", "qun", 4, ["hfjieying", "weipo"]],
	re_quyi: ["male", "qun", 4, ["refuqi", "jiaozi"]],
	dongxie: ["female", "qun", 4, ["dcjiaoxia", "dchumei"]],
	wangrong: ["female", "qun", 3, ["minsi", "jijing", "zhuide"]],
	ol_dingyuan: ["male", "qun", 4, ["cixiao", "xianshuai"]],
	re_hejin: ["male", "qun", 4, ["spmouzhu", "spyanhuo"]],
	re_hansui: ["male", "qun", 4, ["spniluan", "spweiwu"]],
	liuhong: ["male", "qun", 4, ["yujue", "tuxing"]],
	zhujun: ["male", "qun", 4, ["gongjian", "kuimang"]],
	re_maliang: ["male", "shu", 3, ["rexiemu", "heli"], []],
	caobuxing: ["male", "wu", 3, ["moying", "juanhui"], []],
	lijue: ["male", "qun", "4/6", ["xinfu_langxi", "xinfu_yisuan"], []],
	zhangji: ["male", "qun", 4, ["xinfu_lveming", "xinfu_tunjun"], []],
	fanchou: ["male", "qun", 4, ["xinxingluan"], []],
	guosi: ["male", "qun", 4, ["xinfu_tanbei", "xinfu_sidao"], []],
	lvkai: ["male", "shu", 3, ["xinfu_tunan", "xinfu_bijing"], []],
	zhanggong: ["male", "wei", 3, ["xinfu_zhenxing", "xinfu_qianxin"], []],
	weiwenzhugezhi: ["male", "wu", 4, ["xinfu_fuhai"], ["name:卫|温-诸葛|直"]],
	beimihu: ["female", "qun", 3, ["zongkui", "guju", "baijia"], ["name:卑弥|呼"]],
	sp_liuqi: ["male", "qun", 3, ["rewenji", "sptunjiang"]],
	xf_tangzi: ["male", "wei", 4, ["xinfu_xingzhao"], []],
	xf_huangquan: ["male", "shu", 3, ["xinfu_dianhu", "xinfu_jianji"], []],
	xf_sufei: ["male", "wu", 4, ["xinfu_lianpian"], []],
	xushao: ["male", "qun", 4, ["pingjian"]],
	xinpi: ["male", "wei", 3, ["xpchijie", "yinju"]],
	lisu: ["male", "qun", 2, ["lslixun", "lskuizhu"]],
	zhangwen: ["male", "wu", 3, ["songshu", "sibian"]],
	mangyachang: ["male", "qun", 4, ["spjiedao"], []],
	xugong: ["male", "wu", 3, ["biaozhao", "yechou"], []],
	zhangchangpu: ["female", "wei", 3, ["yanjiao", "xingshen"], []],
	gaolan: ["male", "qun", 4, ["xiying"]],
	sp_shenpei: ["male", "qun", 3, ["gangzhi", "beizhan"]],
	xunchen: ["male", "qun", 3, ["fenglve", "mouzhi"], ["clan:颍川荀氏"]],
	sp_zhanghe: ["male", "qun", 4, ["yuanlve"]],
	sp_xuyou: ["male", "qun", 3, ["spshicai", "spfushi"]],
	chunyuqiong: ["male", "qun", 5, ["cangchu", "sushou", "liangying"], ["name:淳于|琼"]],
	lvkuanglvxiang: ["male", "qun", 4, ["liehou", "qigong"], ["name:吕|旷-吕|翔"]],

	duji: ["male", "wei", 3, ["xinfu_andong", "xinfu_yingshi"]],
	liuyao: ["male", "qun", 4, ["xinfu_kannan", "twniju"], ["zhu"]],
	lvdai: ["male", "wu", 4, ["xinfu_qinguo"]],
	sp_taishici: ["male", "qun", 4, ["xinfu_jixu"], ["name:太史|慈"]],
	re_zhangliang: ["male", "qun", 4, ["xinfu_jijun", "xinfu_fangtong"]],
};

export default characters;
