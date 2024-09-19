const characters = {
	wangkuang: ["male", "qun", 4, ["olrenxia"]],
	kongshu: ["female", "qun", 3, ["olleiluan", "olfuchao"]],
	ol_kebineng: ["male", "qun", 4, ["olpingduan"], ["name:科比|罐头"]],
	ol_yuanji: ["female", "wu", 3, ["oljieyan", "oljinghua", "olshuiyue"], ["name:袁|null"]],
	ol_sunru: ["female", "wu", 3, ["olchishi", "olweimian"]],
	caoteng: ["male", "qun", 3, ["olyongzu", "olqingliu"]],
	budugen: ["male", "qun", 4, ["olkouchao"]],
	mawan: ["male", "qun", 4, ["mashu", "olhunjiang"]],
	ol_jiangwan: ["male", "shu", 3, ["olziruo", "olxvfa"]],
	caimao: ["male", "wei", 4, ["olzuolian", "oljingzhou"]],
	ol_peixiu: ["male", "wei", 4, ["olmaozhu", "oljinlan"], ["border:jin"]],
	yadan: ["male", "qun", 4, ["olqingya", "oltielun"]],
	sp_sunce: ["male", "qun", 4, ["junkliantao"]],
	ol_liupi: ["male", "qun", 4, ["olyicheng"]],
	ol_lukai: ["male", "wu", 3, ["olxuanzhu", "oljiane"]],
	liupan: ["male", "qun", 4, ["olpijing"]],
	guotu: ["male", "qun", 3, ["olqushi", "olweijie"]],
	ol_hujinding: ["female", "shu", 3, ["olqingyuan", "olchongshen"]],
	tianchou: ["male", "qun", 4, ["olshandao"]],
	liyi: ["male", "wu", 4, ["olchanshuang", "olzhanjin"]],
	caoyu: ["male", "wei", 3, ["olgongjie", "olxiangxv", "olxiangzuo"]],
	ol_liwan: ["female", "wei", 3, ["relianju", "resilv"]],
	ol_dingshangwan: ["female", "wei", 3, ["olfudao", "olfengyan"]],
	zhangyan: ["male", "qun", 4, ["olsuji", "ollangdao"]],
	ol_tw_zhangji: ["male", "wei", 3, ["skill_zhangji_A", "skill_zhangji_B"]],
	ol_feiyi: ["male", "shu", 3, ["yanru", "hezhong"]],
	lvboshe: ["male", "qun", 4, ["olfushi", "oldongdao"]],
	ol_luyusheng: ["female", "wu", 3, ["olcangxin", "olrunwei"]],
	caoxi: ["male", "wei", 3, ["olgangshu", "oljianxuan"]],
	ol_pengyang: ["male", "shu", 3, ["olxiaofan", "oltuishi", "nzry_cunmu"]],
	ol_qianzhao: ["male", "wei", 4, ["olweifu", "olkuansai"]],
	niujin: ["male", "wei", 4, ["olcuorui", "liewei"]],
	hejin: ["male", "qun", 4, ["mouzhu", "olyanhuo"]],
	hansui: ["male", "qun", 4, ["olniluan", "olxiaoxi"]],
	duanjiong: ["male", "qun", 4, ["olsaogu"]],
	ol_zhouqun: ["male", "shu", 4, ["oltianhou", "olchenshuo"]],
	ol_wenqin: ["male", "wei", 4, ["olguangao", "olhuiqi"]],
	haopu: ["male", "shu", 4, ["olzhenying"]],
	ol_mengda: ["male", "shu", 4, ["olgoude"]],
	ol_wanglang: ["male", "wei", 3, ["gushe", "oljici"]],
	lushi: ["female", "qun", 3, ["olzhuyan", "releijie"], ["name:卢|null"]],
	zhangshiping: ["male", "shu", 3, ["olhongji", "olxinggu"]],
	sunhong: ["male", "wu", 3, ["olxianbi", "olzenrun"]],
	luoxian: ["male", "shu", 4, ["oldaili"]],
	ol_huban: ["male", "wei", 4, ["olhuiyun"]],
	wangguan: ["male", "wei", 3, ["olmiuyan", "olshilu"]],
	ol_zhangyì: ["male", "shu", 4, ["oldianjun", "olkangrui"]],
	ol_zhujun: ["male", "qun", 4, ["olcuipo"]],
	maxiumatie: ["male", "qun", 4, ["mashu", "rekenshang"], ["name:马|休-马|铁"]],
	dongtuna: ["male", "qun", 4, ["oljianman"]],
	zhanghua: ["male", "jin", 3, ["olbihun", "oljianhe", "olchuanwu"]],
	quhuang: ["male", "wu", 3, ["olqiejian", "olnishou"]],
	macheng: ["male", "shu", 4, ["mashu", "olchenglie"]],
	zhangzhi: ["male", "qun", 3, ["olbixin", "olximo"]],
	ol_liuba: ["male", "shu", 3, ["oltongduo", "olzhubi"]],
	ol_furong: ["male", "shu", 4, ["olxiaosi"]],
	ahuinan: ["male", "qun", 4, ["jueman"]],
	jin_guohuai: ["female", "jin", 3, ["zhefu", "yidu"]],
	xiahouxuan: ["male", "wei", 3, ["olhuanfu", "olqingyi", "olzeyue"], ["name:夏侯|玄"]],
	dengzhong: ["male", "wei", 4, ["dzkanpo", "dzgengzhan"]],
	wangyan: ["male", "qun", 4, ["yangkuang", "cihuang", "sanku"], ["border:jin"]],
	huojun: ["male", "shu", 4, ["qiongshou", "fenrui"]],
	caoxiancaohua: ["female", "qun", 3, ["huamu", "qianmeng", "liangyuan", "jisi"], ["name:曹|宪-曹|华"]],
	jin_zhouchu: ["male", "jin", 4, ["shanduan", "yilie"]],
	zhaoyǎn: ["male", "wei", 4, ["tongxie"]],
	ol_puyuan: ["male", "shu", 4, ["olshengong", "olqisi"]],
	ruiji: ["female", "wu", 3, ["qiaoli", "qingliang"], ["name:芮|null"]],
	weizi: ["male", "qun", 3, ["yuanzi", "liejie"]],
	tengfanglan: ["female", "wu", 3, ["luochong", "aichen"]],
	sp_menghuo: ["male", "qun", 4, ["spmanwang"]],
	jin_yanghu: ["male", "jin", 4, ["huaiyuan", "chongxin", "dezhang"]],
	qinghegongzhu: ["female", "wei", 3, ["zengou", "qhzhangji"], ["name:曹|null"]],
	fanjiangzhangda: ["male", "wu", 4, ["yuanchou", "juesheng"], ["name:范|疆-张|达"]],
	tianyu: ["male", "wei", 4, ["saodi", "zhuitao"]],
	ol_chendeng: ["male", "qun", 4, ["olfengji", "olxuanhui"]],
	ol_zhuling: ["male", "wei", 4, ["jixian"]],
	wuyan: ["male", "wu", 4, ["lanjiang"]],
	sp_ol_zhanghe: ["male", "qun", 4, ["spolzhouxuan"]],
	ol_dongzhao: ["male", "wei", 3, ["olxianlve", "olzaowang"]],
	fengfangnv: ["female", "qun", 3, ["zhuangshu", "chuiti"]],
	ol_yangyi: ["male", "shu", 3, ["oljuanxia", "oldingcuo"]],
	zuofen: ["female", "jin", 3, ["zhaosong", "lisi"]],
	ol_wangrong: ["female", "qun", 3, ["olfengzi", "oljizhan", "olfusong"]],
	ol_dengzhi: ["male", "shu", 3, ["olxiuhao", "olsujian"]],
	ol_bianfuren: ["female", "wei", 3, ["fuwei", "yuejian"], ["name:卞|null"]],
	duxi: ["male", "wei", 3, ["quxi", "bixiong"]],
	gaogan: ["male", "qun", 4, ["juguan"]],
	huangchengyan: ["male", "qun", 3, ["guanxu", "yashi"]],
	huangzu: ["male", "qun", 4, ["wangong"]],
	panshu: ["female", "wu", 3, ["weiyi", "jinzhi"]],
	wolongfengchu: ["male", "shu", 4, ["youlong", "luanfeng"], ["name:诸葛|亮-庞|统"]],
	sp_zhangliao: ["male", "qun", 4, ["mubing", "ziqu", "diaoling"]],
	caoshuang: ["male", "wei", 4, ["retuogu", "shanzhuan"]],
	ol_zhangchangpu: ["female", "wei", 3, ["yanjiao", "olxingshen"]],
	zhangling: ["male", "qun", 3, ["zlhuji", "zlshoufu"]],
	caiyang: ["male", "qun", 1, ["yinka", "zhuixi"], ["forbidai", "unseen"]],
	sunshao: ["male", "wu", 3, ["bizheng", "yidian"]],

	huangfusong: ["male", "qun", 4, ["fenyue"], ["name:皇甫|嵩"]],
	yuantanyuanshang: ["male", "qun", 4, ["neifa"], ["name:袁|谭-袁|尚"]],
	xujing: ["male", "shu", 3, ["yuxu", "xjshijian"]],

	jianggan: ["male", "wei", 3, ["weicheng", "daoshu"]],

	caoying: ["female", "wei", 4, ["xinfu_lingren", "fujian"], []],
	simahui: ["male", "qun", 3, ["jianjie", "xinfu_chenghao", "xinfu_yinshi"], ["name:司马|徽"]],
	baosanniang: ["female", "shu", 4, ["olwuniang", "olxushen"], []],

	yangxiu: ["male", "wei", 3, ["jilei", "danlao"]],
	chenlin: ["male", "wei", 3, ["bifa", "songci"]],
	caohong: ["male", "wei", 4, ["yuanhu"]],
	xiahouba: ["male", "shu", 4, ["baobian"], ["name:夏侯|霸"]],
	yuanshu: ["male", "qun", 4, ["yongsi", "weidi"]],
	sp_diaochan: ["female", "qun", 3, ["lihun", "rebiyue"], ["name:null|null", "die:diaochan"]],
	sp_zhaoyun: ["male", "qun", 3, ["ollongdan", "chongzhen"], ["die:zhaoyun"]],
	liuxie: ["male", "qun", 3, ["tianming", "mizhao", "twzhuiting"], ["zhu"]],
	zhugejin: ["male", "wu", 3, ["huanshi", "olhongyuan", "olmingzhe"], ["name:诸葛|瑾"]],
	zhugeke: ["male", "wu", 3, ["aocai", "duwu"], ["name:诸葛|恪"]],
	guanyinping: ["female", "shu", 3, ["huxiao", "xueji", "wuji"]],
	simalang: ["male", "wei", 3, ["junbing", "quji"], ["name:司马|朗"]],
	zhangxingcai: ["female", "shu", 3, ["shenxian", "qiangwu"]],
	fuwan: ["male", "qun", 4, ["dcmoukui"]],
	sp_sunshangxiang: ["female", "shu", 3, ["liangzhu", "fanxiang"]],
	caoang: ["male", "wei", 4, ["kaikang"]],
	sp_caoren: ["male", "wei", 4, ["weikui", "lizhan"]],
	zhangbao: ["male", "qun", 3, ["rezhoufu", "reyingbing"]],
	maliang: ["male", "shu", 3, ["zishu", "yingyuan"]],
	zhugedan: ["male", "wei", 4, ["gongao", "juyi"], ["name:诸葛|诞"]],
	sp_jiangwei: ["male", "wei", 4, ["kunfen", "fengliang"]],
	sp_machao: ["male", "qun", 4, ["olzhuiji", "ol_shichou"]],
	sunhao: ["male", "wu", 5, ["recanshi", "rechouhai", "guiming"], ["zhu"]],
	shixie: ["male", "qun", 3, ["olbiluan", "relixia"]],
	mayunlu: ["female", "shu", 4, ["fengpo", "mashu"]],
	zhanglu: ["male", "qun", 3, ["yishe", "bushi", "midao", "twshijun"], ["zhu"]],
	wutugu: ["male", "qun", 15, ["ranshang", "hanyong"]],
	sp_caiwenji: ["female", "wei", 3, ["chenqing", "mozhi"]],
	zhugeguo: ["female", "shu", 3, ["qirang", "yuhua"], ["name:诸葛|果"]],

	lingju: ["female", "qun", 3, ["jieyuan", "fenxin"], ["name:吕|null"]],

	cuiyan: ["male", "wei", 3, ["yawang", "xunzhi"]],
	jsp_guanyu: ["male", "wei", 4, ["new_rewusheng", "danji"]],
	jsp_huangyueying: ["female", "qun", 3, ["jiqiao", "linglong"]],
	sunluyu: ["female", "wu", 3, ["new_meibu", "new_mumu"]],
	hanba: ["female", "qun", 4, ["fentian", "zhiri"], ["name:null|null"]],
	zumao: ["male", "wu", 4, ["yinbing", "juedi"]],
	wenpin: ["male", "wei", 4, ["zhenwei"]],
	daxiaoqiao: ["female", "wu", 3, ["new_xingwu", "new_luoyan"], ["name:桥|null-桥|null"]],

	guansuo: ["male", "shu", 4, ["zhengnan", "xiefang"]],
	tadun: ["male", "qun", 4, ["reluanzhan"]],
	yanbaihu: ["male", "qun", 4, ["zhidao", "jili"]],
	chengyu: ["male", "wei", 3, ["shefu", "benyu"]],

	sp_pangde: ["male", "wei", 4, ["mashu", "juesi"]],
	sp_jiaxu: ["male", "wei", 3, ["zhenlue", "jianshu", "yongdi"]],

	litong: ["male", "wei", 4, ["tuifeng"]],
	mizhu: ["male", "shu", 3, ["ziyuan", "jugu"]],
	buzhi: ["male", "wu", 3, ["hongde", "dingpan"]],

	caochun: ["male", "wei", 4, ["xinshanjia"]],

	dongbai: ["female", "qun", 3, ["lianzhu", "xiahui"]],

	zhaoxiang: ["female", "shu", 4, ["fanghun", "fuhan"]],
	mazhong: ["male", "shu", 4, ["fuman"]],
	dongyun: ["male", "shu", 3, ["bingzheng", "sheyan"]],
	kanze: ["male", "wu", 3, ["xiashu", "kuanshi"]],
	heqi: ["male", "wu", 4, ["olqizhou", "olshanxi"]],

	yuejin: ["male", "wei", 4, ["xiaoguo"]],
	sp_dongzhuo: ["male", "qun", 5, ["hengzheng"]],
	hetaihou: ["female", "qun", 3, ["zhendu", "qiluan"], ["name:何|null"]],
	dingfeng: ["male", "wu", 4, ["reduanbing", "refenxun"]],
	shamoke: ["male", "shu", 4, ["gzjili"]],

	//zhangren: ["male", "qun", 4, ["chuanxin", "zfengshi"]],

	wangyun: ["male", "qun", 4, ["xinlianji", "xinmoucheng"], ["clan:太原王氏"]],
	sunqian: ["male", "shu", 3, ["qianya", "shuimeng"]],
	xizhicai: ["male", "wei", 3, ["tiandu", "xianfu", "chouce"]],
	quyi: ["male", "qun", 4, ["fuqi", "jiaozi"]],

	luzhi: ["male", "wei", 3, ["qingzhong", "weijing"]],
	
	wangcan: ["male", "qun", 3, ["xinfu_sanwen", "xinfu_qiai", "xinfu_denglou"]],
	re_jsp_pangtong: ["male", "wu", 3, ["xinfu_guolun", "xinfu_songsang"]],
	lvqian: ["male", "wei", 4, ["xinfu_weilu", "xinfu_zengdao"]],
	panjun: ["male", "wu", 3, ["xinfu_guanwei", "xinfu_gongqing"]],
	zhoufang: ["male", "wu", 3, ["xinfu_duanfa", "xinfu_youdi"]],
	yanjun: ["male", "wu", 3, ["xinfu_guanchao", "xinfu_xunxian"]],
	liuyan: ["male", "qun", 3, ["xinfu_tushe", "xinfu_limu"]],
};

export default characters;
