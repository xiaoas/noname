const characters = {
	jx_sunjian: ["male", "wu", "4/5", ["gzyinghun", "wulie", "twpolu"]],
	jx_zhouyu: ["male", "wu", 4, ["jxxiongzi", "jxzhanyan"]],
	jx_guanyu: ["male", "shu", 4, ["jxwusheng", "jsrgguanjue", "nuzhan"]],
	jx_shen_caoren: ["male", "shen", 4, ["jxjushou"], ["wei"]],
	jx_shen_liubiao: ["male", "shen", 2, ["jxxiongju", "jxfujing", "jxyongrong"], ["qun"]],
	yj_zhonghui: ["male", "wei", 4, ["psmouchuan", "pszizhong", "psjizun", "psqingsuan"], ["zhu"]],
	yj_ehuan: ["male", "qun", 5, ["psdiwan", "pssuiluan", "psconghan"], ["doublegroup:shu:qun"]],
	yj_zhouji: ["female", "wu", 3, ["psyanmou", "pszhanyan", "psyuhuo"], ["name:周|null"]],
	drag_guanyu: ["male", "shu", 4, ["dragchaojue", "dragjunshen"]],
	drag_caoren: ["male", "wei", 4, ["draglizhong", "dragjuesui"]],
	drag_lvchang: ["male", "wei", 3, ["dragjuwu", "dragshouxiang"]],
	jsp_ganfuren: ["female", "shu", 3, ["shushen", "shenzhi"], ["character:gz_ganfuren", "name:甘|null"]],
	ol_xinxianying: ["female", "wei", 3, ["xincaishi", "xinzhongjian"]],
	zhangliang: ["male", "qun", 4, ["old_jijun", "old_fangtong"]],
	jsp_caoren: ["male", "wei", 4, ["kuiwei", "yanzheng"]],
	old_machao: ["male", "qun", 4, ["zhuiji", "oldcihuai"]],
	vtb_xiaosha: ["female", "qun", 4, ["vtbguisha", "vtbshuli"], ["name:null|杀"]],
	vtb_xiaoshan: ["female", "qun", 4, ["vtbshanwu", "vtbxianli"], ["name:null|闪"]],
	vtb_xiaotao: ["female", "qun", 4, ["vtbtaoyan", "vtbyanli"], ["name:null|桃"]],
	vtb_xiaole: ["female", "qun", 4, ["vtbleyu", "vtbyuanli"], ["name:null|乐"]],
	vtb_xiaojiu: ["female", "qun", 4, ["vtbmeiniang", "vtbyaoli"], ["name:null|酒"]],
	ps_shen_machao: ["male", "shen", 4, ["psshouli", "pshengwu"], ["qun"]],
	mateng: ["male", "qun", 4, ["mashu", "xiongyi"]],
	tianfeng: ["male", "qun", 3, ["sijian", "gzsuishi"]],
	jiling: ["male", "qun", 4, ["shuangren"]],
	kongrong: ["male", "qun", 3, ["zymingshi", "lirang"]],
	jiangqing: ["male", "wu", 4, ["zyshangyi"]],
	pk_sp_duyu: ["male", "qun", 4, ["pkwuku", "pksanchen"]],
	ps_lvbu: ["male", "qun", 4, ["wushuang", "pssheji"]],
	ps_jiaxu: ["male", "qun", 4, ["wansha", "psqupo", "psbaoquan"]],
	ps_machao: ["male", "shu", 4, ["mashu", "tieji", "psweihou"]],
	ps2066_zhugeliang: ["male", "shu", 3, ["pszhiji", "psjiefeng", "kongcheng"], ["name:诸葛|亮"]],
	ps_zhugeliang: ["male", "shu", 3, ["psguanxing", "pslongyin"], ["name:诸葛|亮"]],
	ps_simayi: ["male", "wei", 3, ["reguicai", "pshuxiao"], ["name:司马|懿"]],
	ps2068_simayi: ["male", "wei", 3, ["refankui", "reguicai", "pszhonghu"], ["name:司马|懿"]],
	ps_caopi: ["male", "wei", 3, ["psjianwei", "fangzhu", "songwei"], ["zhu"]],
	ps_jin_simayi: ["male", "jin", 3, ["smyyingshi", "psquanyi"], ["name:司马|懿"]],
	ps_caozhi: ["male", "wei", 3, ["psliushang", "psqibu"]],
	ps1062_zhouyu: ["male", "wu", 3, ["yingzi", "psoldshiyin"]],
	ps2080_zhouyu: ["male", "wu", 3, ["psshiyin", "psquwu", "psliaozou"]],
	ps2063_zhaoyun: ["male", "shu", 4, ["psqijin", "psqichu", "pslongxin"]],
	ps2067_zhaoyun: ["male", "shu", 4, ["longdan", "pshuiqiang", "pshuntu"]],
	ps1059_guojia: ["male", "wei", 3, ["tiandu", "psqizuo"]],
	ps2070_guojia: ["male", "wei", 3, ["yiji", "psquanmou"]],
	ps_guanyu: ["male", "shu", 4, ["wusheng", "pszhonghun", "nuzhan"]],
	pe_wenqin: ["male", "wei", 4, ["gzjinfa"]],
	pe_sunchen: ["male", "wu", 4, ["zyshilu", "zyxiongnve"]],
	pe_mengda: ["male", "wei", 4, ["qiuan", "liangfan"]],
	pe_zhonghui: ["male", "wei", 4, ["zyquanji", "zypaiyi"], ["clan:颍川钟氏"]],
	pe_wangyun: ["male", "qun", 3, ["zylianji", "zymoucheng"], ["clan:太原王氏"]],
	shen_jiaxu: ["male", "shen", 3, ["weimu", "zybishi", "zyjianbing"], ["qun"]],
	yj_zhenji: ["female", "wei", 3, ["yjluoshen", "qingguo"]],
	yj_jiaxu: ["male", "wei", 3, ["yjzhenlve", "yjjianshu", "yjyongdi"]],
	yj_xuyou: ["male", "qun", 3, ["yjshicai", "yjchenggong", "yjzezhu"]],
	yj_dongzhuo: ["male", "qun", 7, ["yjtuicheng", "yjyaoling", "yjshicha", "yjyongquan"], ["zhu"]],
	yongjian_ganning: ["male", "wu", 4, ["yjjielve"]],
	yj_zhangfei: ["male", "shu", 4, ["yjmangji"]],
	yj_caohong: ["male", "wei", 4, ["yjlifeng"]],
	yj_liru: ["male", "qun", 3, ["yjdumou", "yjweiquan", "yjrenwang"]],
	yj_caocao: ["male", "qun", 4, ["yjxiandao", "yjsancai", "yjyibing"]],
	longyufei: ["female", "shu", 3, ["longyi", "zhenjue"]],
	sp_liubei: ["male", "shu", 4, ["zhaolie", "shichou"], ["zhu"]],
	sp_zhangfei: ["male", "shu", 4, ["jie", "dahe"]],
	sp_lvmeng: ["male", "wu", 3, ["tanhu", "mouduan"]],
	sp_xiahoudun: ["male", "wei", 4, ["fenyong", "xuehen"], ["name:夏侯|惇"]],
	sp_ganning: ["male", "qun", 4, ["yinling", "junwei"]],
	sp_daqiao: ["female", "wu", 3, ["yanxiao", "anxian"], ["name:桥|null"]],
	sp_pangtong: ["male", "qun", 3, ["xinmanjuan", "zuixiang"]],
	huangjinleishi: ["female", "qun", 3, ["fulu", "fuji"], ["name:null|null-null|null"]],
	jsp_zhaoyun: ["male", "qun", 3, ["chixin", "reyicong", "suiren"]],
	sp_xiahoushi: ["female", "shu", 3, ["xinfu_yanyu", "xinfu_xiaode"], ["name:夏侯|null"]],
	sp_gongsunzan: ["male", "qun", 4, ["spyicong", "sptuji"], ["name:公孙|瓒"]],
	sp_simazhao: ["male", "wei", 3, ["spzhaoxin", "splanggu"], ["name:司马|昭"]],
	sp_wangyuanji: ["female", "wei", 3, ["spfuluan", "spshude"]],
	sp_xinxianying: ["female", "wei", 3, ["spmingjian", "spyinzhi"]],
	sp_liuxie: ["male", "qun", 3, ["sphuangen", "sphantong"]],
	ns_lijue: ["male", "qun", "4/6", ["nsfeixiong", "nscesuan"]],
	ns_zhangji: ["male", "qun", 4, ["nslulve"]],
	ns_fanchou: ["male", "qun", 4, ["nsyangwu"]],
	ns_jiaxu: ["male", "qun", 3, ["nsyice", "luanwu"]],
	ns_chendao: ["male", "shu", 4, ["nsjianglie"]],
	yj_caoang: ["male", "wei", 4, ["yjxuepin"]],
	ns_caoanmin: ["male", "wei", 4, ["nskuishe"]],
	jsp_liubei: ["male", "qun", 4, ["jsprende"]],
};

export default characters;
