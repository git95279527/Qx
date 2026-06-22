## 13geapp.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：13个APP解锁全家桶
# 下载地址：https://t.cn/A6Ouq9uD
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## 13geapp.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(appss|standard)\.(rhinox.*|linhongshi)\.com\/.+\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/13geapp.js

#[mitm]
# hostname = *.rhinox*.com, appss.linhongshi.com

## 360xj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：360相机
# 下载地址：https://t.cn/A6O2Vt0D
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## 360xj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.camera360\.com\/(api\/(order\/purchase|iap\/check-receipt)|v\d\/operational-positions) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/360xj.js

#[mitm]
# hostname = *.camera360.com

## 40sishi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：计算器HD，万能播放器，万能变声器，塔罗牌，Art Widget(小组件)，memo(标签小组件)，NFC标签读写器工具
# 下载地址：http://t.cn/A6xF7wam
# 下载地址：https://t.cn/A6CojaZe
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用说明：基本全家桶全解锁，NFC不确定解锁没有
# 
# **************************************
# 

## 40sishi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https?:\/\/www\.40sishi\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/40sishi.js

#[mitm]

# hostname = www.40sishi.com

## 4gexj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Foodie/轻图/B612相机/甜盐相机
# 下载地址：https://t.cn/A6OnDkXP
# 下载地址：https://t.cn/A6OjOeJY
# 下载地址：https://t.cn/A6OmacYG
# 下载地址：https://t.cn/A6Omaf2D
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## 4gexj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(purchase-.*-api|user-kaji-api)\.(yiruikecorp|b612kaji|tianyancam)\.com\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/4gexj.js

#[mitm]
# hostname = purchase-*-api.*.com, user-kaji-api.b612kaji.com

## AdGuard.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：AdGuard-Safari浏览器扩展
# 下载地址：https://t.cn/A6xe1oaK
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## AdGuard.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/AdGuard.js

#[mitm]
# hostname = mobile-api.adguard.org

## Agenda.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Agenda-当笔记遇见日历
# 下载地址：https://t.cn/A6ouQyEq
# 更新日期：2025-01-11
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Agenda.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/accounts\.agenda\.com\/users\/.*\/license url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Agenda.js

#[mitm]
# hostname = accounts.agenda.com

# [删除] Calendars.js 中包含 buy.itunes.apple.com，已删除
## CamScanner.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：扫描全能王 解锁黄金会员
# 下载地址：https://t.cn/A6ouHe4B
# 脚本作者：chxm1023
# 使用说明：解锁部分功能，使用前先开脚本。
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## CamScanner.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/.*\.(intsig\.net|camscanner\.com) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/CamScanner.js

#[mitm]

# hostname = *.camscanner.com, *.intsig.net

## Cb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Cubox-收藏阅读
# 下载地址：https://t.cn/A6x4qhyJ
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Cb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/cubox\.(pro|cc)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Cb.js

#[mitm]
# hostname = cubox.*

## Collart.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Collart
# 下载地址：https://t.cn/A6KOxZ9O
# 项目名称：AI消除笔-擦除物体
# 下载地址：https://t.cn/A60z9xtt
# 项目名称：睡前故事大全
# 下载地址：https://t.cn/A6Uy3Kxo
# 项目名称：网速测速大师
# 下载地址：https://t.cn/A6KOx2xo
# 项目名称：测速管家
# 下载地址：https://t.cn/A6KOxyCH
# 项目名称：Pixelance
# 下载地址：https://t.cn/A6KOxcj9
# 项目名称：ShotCut plog/拼图/快拍/海报
# 下载地址：https://t.cn/A60z9lu9
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Collart.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/iap\.etm\.tech\/receipts url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Collart.js

#[mitm]
# hostname = iap.etm.tech

## Context.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：Context - 基于语境学英语AI工具
# 脚本功能：解锁Plus
# 下载地址：https://too.st/eXS
# 更新日期：2025-08-13
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Context.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/rc\.visionarytech\.ltd\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Context.js
^https?:\/\/rc\.visionarytech\.ltd\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Context.js

#[mitm]
# hostname = rc.visionarytech.ltd

## Cookiejz.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：Cookie-记账
# 下载工具：https://t.cn/A6cqfdMK
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# *****************************************
# 

## Cookiejz.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Cookiejz.js

#[mitm] 

# hostname = api.revenuecat.com

## Craft.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Craft-文件笔记编辑器
# 下载地址：https://t.cn/A6HEVDeP
# 更新日期：2024-10-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Craft.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(api|docs)\.craft\.do\/(api\/)?(auth\/v\d\/profile|subscription\/(receipt|teams\/get-subscriptions)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Craft.js

#[mitm]
# hostname = api.craft.do

## DailyArt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：DailyArt(每日艺术)
# 下载地址：https://t.cn/A6pv6XfN
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## DailyArt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.getdailyart\.com\/api\/(subscription\/verified|auth\/login|check-logged) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/DailyArt.js

#[mitm]
# hostname = api.getdailyart.com

## DayOne.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：DayOne:每日日记和日记
# 脚本功能：解锁Gold
# 下载地址：https://is.gd/V1nRKk
# 更新日期：2026-05-14
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## DayOne.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/dayone\.app\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/DayOne.js
^https?:\/\/enrichment-api\.superwall\.com\/api\/v\d\/enrich url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/DayOne.js

#[mitm]
# hostname = dayone.app, enrichment-api.superwall.com

## DeepFaker.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：DeepFaker
# 下载地址：https://t.cn/A6WuKDkR
# 更新日期：2023-11-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## DeepFaker.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.deepfaker\.app\/api\/.* url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/DeepFaker.js

#[mitm]
# hostname = api.deepfaker.app

## Diarly.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：Diarly
# 下载工具：https://t.cn/A6pXNOM5
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## Diarly.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Diarly.js

#[mitm]
# hostname = api.revenuecat.com

## Drafts.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Drafts
# 下载地址：https://t.cn/A6OoCm0s
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Drafts.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/backend\.getdrafts\.com\/api\/v\d\/verification\/(account_status|verify_receipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Drafts.js

#[mitm]
# hostname = backend.getdrafts.com

## Endel.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Endel
# 下载地址：https://t.cn/A60WXk6k
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Endel.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api-production\.endel\.io\/v\d\/call url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Endel.js

#[mitm]
# hostname = api-production.endel.io

## Everyday.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Everyday-习惯养成
# 下载地址：https://t.cn/A63VUUV6
# 更新日期：2025-01-24
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Everyday.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.everyday\.app\/(users|makeIosSubscription) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Everyday.js

#[mitm]
# hostname = api.everyday.app

## FT.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：FT中文网
# 下载地址：https://t.cn/A6OudTtN
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## FT.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.cloudfront\.net\/index\.php\/jsapi\/(paywall|get_story_more_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/FT.js
^https?:\/\/ftmailbox\.cn\/ad_impression\/.+ url reject-200

#[mitm]
# hostname = *.cloudfront.net, ftmailbox.cn

## FaceLab.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：FaceLab
# 下载地址：https://t.cn/A6YSUpWY
# 更新日期：2024-02-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## FaceLab.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/subscription-api\.lyrebirdstudio\.net\/subscriptions\/apple\/(verify|status|decode-apple-receipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/FaceLab.js

#[mitm]
# hostname = subscription-api.lyrebirdstudio.net

## FaceSwapper.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：FaceSwapper-AI换脸
# 下载地址：https://t.cn/A6TUPtBv
# 更新日期：2024-07-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## FaceSwapper.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api-.*\.facereplacerext\.com\/api\/rest\/commerce\/integrate\/vip\/perform url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/FaceSwapper.js

#[mitm]
# hostname = api-*.facereplacerext.com

## Felo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Felo实时翻译
# 下载地址：https://t.cn/A6pA5Uiu
# 更新日期：2023-12-06
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Felo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/translator\.felo\.me\/api\/plan\/current url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Felo.js

#[mitm]
# hostname = translator.felo.me

## Flow.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：视频&图片编辑套装
# 下载地址：https://t.cn/A6Rkno6Y
# 更新日期：2024-09-16
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Flow.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.vlognow\.me\/.*-pay\/api\/v\d\/(user\/subscriptions|public\/iap\/receipt\/status) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Flow.js

#[mitm]
# hostname = *.vlognow.me

## Focos.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Focos相机
# 下载地址：https://t.cn/AilyJ3mp
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Focos.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Focos.js

#[mitm]
# hostname = focos.oracle.bendingspoonsapps.com

# [删除] Gemini.js 中包含 buy.itunes.apple.com，已删除
## Grammarly.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Grammarly-移动输入法
# 下载地址：https://t.cn/A6jLxORj
# 更新日期：2024-01-18
# 脚本作者：@David_Hex01
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Grammarly.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.grammarly\.com\/(api\/v\d\/subscription|v\d\/user\/oranonymous) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Grammarly.js

#[mitm]
# hostname = *.grammarly.com

## Hydra.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Hydra相机
# 下载地址：https://t.cn/A6OKE5gP
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Hydra.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/creaceed\.com\/apis\/appstore\/verifyreceipt url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Hydra.js

#[mitm]
# hostname = creaceed.com

## Hyperweb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Hyperweb Safari浏览器扩展
# 下载地址：https://t.cn/A60JTajr
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Hyperweb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/zy6kcqa01a\.execute-api\.us-east-2\.amazonaws\.com\/prod\/verifyReceipt url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Hyperweb.js

#[mitm]
# hostname = zy6kcqa01a.execute-api.us-east-2.amazonaws.com

## IFTTT.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：IFTTT-工作流程和智能家居自动化
# 下载地址：https://t.cn/A6BoMYcc
# 更新日期：2025-03-17
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## IFTTT.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/ifttt\.com\/api\/v\d\/graph url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/IFTTT.js

#[mitm]
# hostname = ifttt.com

## JavDB.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：JavDB-净化/解锁VIP
# 下载地址：https://javdb008.com
# 更新日期：2024-07-30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## JavDB.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(users|startup|ads) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js
;^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(movies|movie_played) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js

#[mitm]
# hostname = api.hechuangxinxi.xyz

## LinearityCurve.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：LinearityCurve - 平面设计
# 下载地址：https://is.gd/dn0RDu
# 更新日期：2026-02-02
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## LinearityCurve.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.linearity\.io\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/LinearityCurve.js
^https?:\/\/.*\.linearity\.io\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/LinearityCurve.js

#[mitm]
# hostname = *.linearity.io

## Lingvist.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Lingvist-学习语言
# 下载地址：https://t.cn/A6I2PgqM
# 更新日期：2024-07-25
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Lingvist.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/.*\.lingvist\.com\/.+\/user\/(sync|services) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Lingvist.js

#[mitm]
# hostname = *.lingvist.com

## Mixgram.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：Mixgram-图片拼接
# 脚本功能：解锁高级版
# 下载地址：https://is.gd/7m6Awj
# 更新日期：2026-01-26
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Mixgram.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.+\.cloudfunctions\.net\/validateSubscription url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Mixgram.js
^https?:\/\/.+\.appsflyersdk\.com\/api\/v\d\/ios\/validate_subscription url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Mixgram.js

#[mitm]
# hostname = *.cloudfunctions.net, *.appsflyersdk.com

## Mizframa.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：Mizframa
# 下载工具：https://t.cn/A6Nmv2hg
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## Mizframa.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Mizframa.js

#[mitm]
# hostname = api.revenuecat.com

## Moises.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Moises-音乐人应用
# 下载地址：https://t.cn/A6pzDxjh
# 更新日期：2024-10-13
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Moises.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.moises\.ai\/graphql url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Moises.js

#[mitm]
# hostname = api.moises.ai

## MoneyThings.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：MoneyThings-记账
# 下载地址：https://t.cn/A6pg9nPW
# 项目名称：SalesCat-RevenueCat客户端
# 下载地址：https://t.cn/A6pFPFKM
# 项目名称：MatrixClocca-矩阵时钟
# 下载地址：https://t.cn/A6pFhtw1
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## MoneyThings.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/MoneyThings.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/MoneyThings.js

#[mitm]
# hostname = api.revenuecat.com

## Nicegram.js 从第1行到 [rewrite_local] 前一行：
## [跳过] 未检测到 [rewrite_local]

## Nicegram.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## Notability.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Notability:笔记,PDF
# 下载地址：https://t.cn/A6Cgjtei
# 更新日期：2025-02-24
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Notability.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Notability.js

#[mitm]
# hostname = notability.com

## Noted.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：Noted - 录音备忘录
# 脚本功能：永久会员
# 下载地址：https://t.cn/A6O07XKv
# 更新日期：2025-05-12
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Noted.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(functions|subscription)-api\.notedapp\.io\/(v\d\/purchases\/\d+|api\/verifyReceipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Noted.js

#[mitm]
# hostname = *-api.notedapp.io

# [删除] Pandora.js 中包含 buy.itunes.apple.com，已删除
## Perfect365.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Perfect365
# 下载地址：https://t.cn/A6YH7YPQ
# 更新日期：2024-03-02
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Perfect365.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/service\.perfect365\.com\/svr\/perfect365\/services url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Perfect365.js

#[mitm]
# hostname = service.perfect365.com

## PhotoCleaner.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：照片清理工具Photo Cleaner
# 下载地址：https://t.cn/A6qK2YhO
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## PhotoCleaner.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/PhotoCleaner.js

#[mitm] 
# hostname = api.revenuecat.com

## PhotoGrid.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：PhotoGrid
# 脚本功能：解锁Pro，AI不可用
# 下载地址：https://is.gd/16B8xy
# 更新日期：2026-03-29
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## PhotoGrid.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/pgapi\.photogrid\.app\/(v\d\/(ios\/auth|ai\/func)|user) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/PhotoGrid.js

#[mitm]
# hostname = pgapi.photogrid.app

# [删除] PhotoRetouch.js 中包含 buy.itunes.apple.com，已删除
## Pixelup.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Pixelup AI照片增强器
# 下载地址：https://t.cn/A60PK5CX
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 特别提示：如果无效，先试用会员，再使用！
# 
# **************************************
# 

## Pixelup.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/receipt-verifier\.cdwapi\.com\/receipt url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Pixelup.js

#[mitm]
# hostname = receipt-verifier.cdwapi.com

# [删除] Prettya.js 中包含 buy.itunes.apple.com，已删除
## Ps.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：PSExpress-图片编辑
# 下载地址：https://t.cn/A6ou0oGd
# 版本支持：23.49.1
# 更新日期：2023-12-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Ps.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/lcs-mobile-cops\.adobe\.io\/(mobile_profile|mobiles\/access_profile) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Ps.js

#[mitm]
# hostname = lcs-mobile-cops.adobe.io

# [删除] PutApp.js 中包含 buy.itunes.apple.com，已删除
## RainViewer.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：RainViewer天气预报
# 下载地址：https://t.cn/A6WqTbgz
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## RainViewer.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/d1hzbu30hrhkoe\.cloudfront\.net\/mobile\/verify\/ios url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/RainViewer.js

#[mitm]
# hostname = d1hzbu30hrhkoe.cloudfront.net

## RawPix.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：RawPix-DIY壁纸
# 脚本功能：解锁VIP
# 下载地址：https://is.gd/Sx6SmN
# 更新日期：2026-05-02
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## RawPix.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.rawpixlive\.com\/api\/(sign\/profile|picture\/checkout|config\/config) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/RawPix.js

#[mitm]
# hostname = api.rawpixlive.com

# [删除] ReLens.js 中包含 buy.itunes.apple.com，已删除
## Reheji.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Revenuecat系列解锁合集
# 更新日期：2026-06-22
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Reheji.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js

#[mitm]
# hostname = api.revenuecat.com, api.rc-backup.com

# [删除] Scanner.js 中包含 buy.itunes.apple.com，已删除
## Slopes.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Slopes
# 下载地址：https://t.cn/A6lxfuhC
# 脚本作者：ios151
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Slopes.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/my\.getslopes\.com\/api\/v\d\/account url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Slopes.js

#[mitm]
# hostname = my.getslopes.com

# [删除] SmartGym.js 中包含 buy.itunes.apple.com，已删除
## StomachBook.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：胃之书
# 下载地址：https://t.cn/A6TukISS
# 更新日期：2024-04-25
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## StomachBook.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/bellybook-app-api\.bellybook\.cn\/api\/v\d\/users\/(me|my_useage_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/StomachBook.js

#[mitm]
# hostname = bellybook-app-api.bellybook.cn

## Syjsq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Symbolab (需要登录)
# 下载地址：https://t.cn/A6cE1x9u
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# **************************************
# 

## Syjsq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Syjsq.js

#[mitm]

# hostname = scibug.com

## TenPercent.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：TenPercent
# 下载地址：https://too.st/71V
# 更新日期：2023-12-24
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## TenPercent.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.changecollective\.com\/api\/v\d\/user url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/TenPercent.js

#[mitm]
# hostname = api.changecollective.com

## TimeTree.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：TimeTree日历
# 下载地址：https://t.cn/A60Me2oT
# 更新日期：2026-01-21
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## TimeTree.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.timetreeapp\.com\/.+\/user\/subscription url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/TimeTree.js

#[mitm]
# hostname = api.timetreeapp.com

# [删除] Today.js 中包含 buy.itunes.apple.com，已删除
## Tripsy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Tripsy-旅行规划者
# 下载地址：https://t.cn/A60jMYum
# 更新日期：2025-03-20
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Tripsy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/firstclass\.tripsy\.app\/api\/v\d\/receipt\/update url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Tripsy.js

#[mitm]
# hostname = firstclass.tripsy.app

## VideoShow.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：录屏
# 下载地址：https://t.cn/A6pvVCrS
# 项目名称：大神P图
# 下载地址：https://t.cn/A6p7eiRM
# 项目名称：乐秀
# 下载地址：https://t.cn/A6p7XAT4
# 项目名称：多功能视频剪辑
# 下载地址：https://t.cn/A6p7XyPT
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## VideoShow.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.(videoshowiosglobalserver|enjoy-mobi)\.com\/zone\/.+\/(iosPayClient\/(payVerify|imeiVerify)|startPageAd\/getAds) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/VideoShow.js

#[mitm]
# hostname = *.videoshowiosglobalserver.com, *.enjoy-mobi.com

## Vista.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Vista看天下
# 下载地址：https://t.cn/A6ORUIIv
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Vista.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/open3\.vistastory\.com\/v\d\/api\/(vip|my\/home\/get_home_center|user/pendant|poster\/share_poster|adm\/get_popup_ad|index\/loading_ad) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Vista.js

#[mitm] 
# hostname = open3.vistastory.com

## WPS.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 项目名称：WPS Office
# 下载地址：https://t.cn/A6KOhd30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## WPS.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(vas|account|drive)\.wps\.cn\/(query\/api\/.+\/list_purchase_info|api\/(v\d\/spaces|users\/.+\/overview)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/WPS.js

#[mitm]
# hostname = *.wps.cn

## Wall.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Wallcraft-动态壁纸
# 下载地址：http://t.cn/A6iO7Eht
# 更新日期：2025-03-21
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## Wall.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/billing-ios\.wallpaperscraft\.com\/v\d\/(verify_receipt|products)\/remove_ads url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Wall.js

#[mitm]
# hostname = billing-ios.wallpaperscraft.com

## WeiShangBiJi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：微商笔记 解锁VIP
# 下载地址：https://t.cn/A6CaiudM
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## WeiShangBiJi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https?:\/\/book\.wetapapp\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/WeiShangBiJi.js

#[mitm]

# hostname = book.wetapapp.com

## Xmind.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Xmind-思维导图
# 下载地址：https://t.cn/AipCL5zE
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用说明：先登录Xmind账号在恢复购买
# 
# **************************************
# 

## Xmind.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(?:www\.)?xmind\..*\/.+\/(devices|token\/.+) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Xmind.js

#[mitm]
# hostname = *xmind.*

## adapty.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：adapty-合集
# 更新日期：2025-05-29
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## adapty.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.adapty\.io\/api\/v\d\/sdk\/(analytics\/profiles|in-apps\/(apple\/receipt\/validate|purchase-containers)|purchase\/app-store) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/adapty.js

#[mitm]
# hostname = api.adapty.io

## airdroid.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Airdroid Cast-无线投屏助手
# 下载地址：https://t.cn/A6TYOPUL
# 数据来源：@David_Hex01
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## airdroid.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(pay|id-cast)\.airdroid\.cn\/(cast\/getUserPaymentInfo|user\/getuserinfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/airdroid.js

#[mitm]
# hostname = *.airdroid.cn

## aituhuihua.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：爱涂绘画
# 下载地址：https://t.cn/A6OlvCzI
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## aituhuihua.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/kkr-user\.tapque\.com\/kkruserapi\/userOrderInfo\/isVip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/aituhuihua.js

#[mitm]
# hostname = kkr-user.tapque.com

## aituiwen.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：爱推文
# 下载地址：https://t.cn/A60zO7ur
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## aituiwen.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/twios\.styleart\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/aituiwen.js

#[mitm]
# hostname = twios.styleart.cn

## aixiege.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：歌歌AI写歌
# 下载地址：https://t.cn/A6nZnbJH
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## aixiege.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/apiv2\.somuseai\.com\/userinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/aixiege.js

#[mitm]
# hostname = apiv2.somuseai.com

## ajj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：爱剪辑
# 下载地址：https://t.cn/A6KKPMgP
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ajj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/(UserPersonalCoreAsync|GetUserDetail) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ajj.js

#[mitm]
# hostname = api.open.loveclip.site

## alidrive.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：阿里云盘 净化/解锁SVIP
# 下载地址：https://t.cn/A6GqTACm
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## alidrive.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(api|member)\.(aliyundrive|alipan)\.com\/(.+\/(users|activity|user\/get)|((business|apps)\/.+\/users|adrive\/.+\/user)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/alidrive.js

#[mitm]
# hostname = *.aliyundrive.com, *.alipan.com

## aoruan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：傲软抠图
# 下载地址：https://t.cn/A6xBOE5d
# 项目名称：傲软扫描
# 下载地址：https://t.cn/A6o1jHWR
# 项目名称：傲软PDF转换
# 下载地址：https://t.cn/A6o1j588
# 项目名称：傲软PDF编辑
# 下载地址：https://t.cn/A6o1jCGU
# 项目名称：傲软投屏
# 下载地址：https://t.cn/A65nw9gx
# 项目名称：咖映
# 下载地址：https://t.cn/A6o1lsFL
# 项目名称：轻闪PDF
# 下载地址：https://t.cn/A6o1iiI2
# 项目名称：乃糖小组件
# 下载地址：https://t.cn/A6o1iMdP
# 项目名称：佐糖
# 下载地址：https://t.cn/A6o1iVTI
# 项目名称：佐糖照片修复
# 下载地址：https://t.cn/A6o1itzG
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## aoruan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/aoruan.js

#[mitm] 
# hostname = *.aoscdn.com

## apphud.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：apphud合集
# 下载地址：https://t.cn/A6m7WeMH
# 下载地址：https://t.cn/A6WlGNDi
# 更新日期：2025-03-31
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## apphud.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/apphud.js

#[mitm]
# hostname = *.apphud.com

## arqjt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：傲软抠图
# 下载地址：https://t.cn/A6xBOE5d
# 项目名称：傲软扫描
# 下载地址：https://t.cn/A6o1jHWR
# 项目名称：傲软PDF转换
# 下载地址：https://t.cn/A6o1j588
# 项目名称：傲软PDF编辑
# 下载地址：https://t.cn/A6o1jCGU
# 项目名称：傲软投屏
# 下载地址：https://t.cn/A65nw9gx
# 项目名称：咖映
# 下载地址：https://t.cn/A6o1lsFL
# 项目名称：轻闪PDF
# 下载地址：https://t.cn/A6o1iiI2
# 项目名称：乃糖小组件
# 下载地址：https://t.cn/A6o1iMdP
# 项目名称：佐糖
# 下载地址：https://t.cn/A6o1iVTI
# 项目名称：佐糖照片修复
# 下载地址：https://t.cn/A6o1itzG
# 更新日期：2025-01-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## arqjt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.(aoscdn\.com|apsapp\.cn) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/arqjt.js

#[mitm]
# hostname = *.aoscdn.com, *.apsapp.cn

## artgo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：ARTGO 个性水印
# 下载地址：https://t.cn/A6Bzayhw
# 更新日期：2025-03-08
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## artgo.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## artify.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Ai-Artify
# 下载地址：https://t.cn/A6jQDJke
# 更新日期：2024-02-01
# 脚本作者：@David_Hex01
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## artify.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/app\.kqwl\.site\/api\/v\d\/user\/install url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/artify.js

#[mitm]
# hostname = app.kqwl.site

## axjjb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：安心记加班
# 下载地址：https://t.cn/A6HqR0Wf
# 更新日期：2025-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## axjjb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.julanling\.com\/(member|splash_screen\/jjb_splash_screen|switch_my\/vip_banner_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/axjjb.js

#[mitm]
# hostname = *.julanling.com

## baimiao.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：白描
# 下载地址：https://t.cn/A602ZQ3K
# 更新日期：2023-12-05
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## baimiao.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/baimiao\.uzero\.cn\/api\/.+\/(appLaunchWithUser|getAnnouncement|checkLoginClient) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/baimiao.js

#[mitm]
# hostname = baimiao.uzero.cn

## bandeng.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：板凳音乐
# 下载地址：https://t.cn/A6WODB1b
# 更新日期：2024-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bandeng.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/mobileapp\.wuyamusic\.com\/playmusic-app-server-400\/(vip\/user\/list.+|music\/score\/get2.+|choose\/getmusic|api|app\/swiper) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bandeng.js

#[mitm]
# hostname = mobileapp.wuyamusic.com

## baozouptu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：暴走P图
# 下载地址：https://t.cn/A6WwGEm7
# 更新日期：2025-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## baozouptu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/api\.intelimeditor\.com\/user\/loginByThirdPlatformApp url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/baozouptu.js

#[mitm]
# hostname = api.intelimeditor.com

## bdcloud.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：百度网盘
# 下载地址：https://t.cn/AiT82mfg
# 更新日期：2026-05-31
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bdcloud.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/pan\.baidu\.com\/(act\/.+\/(activityentry|bchannel|cardwelfare|skin)|rest\/.+\/(membership\/user|pcs\/adv)|feed\/cardinfos|api\/(user\/getinfo|quota|loginstatus|account\/getprivilege)|buy\/ad\/conf|wap\/vip|coins\/taskcenter\/homensr) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js

#[mitm]
# hostname = pan.baidu.com

## bdsp.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：布丁锁屏/布丁锁屏壁纸
# 下载地址：https://t.cn/A6o11VGR
# 下载地址：https://t.cn/A6NXjTUx
# 更新日期：2025-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
#  

## bdsp.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/screen-lock\.(sm-check|51wnl-cq)\.com\/userApi\/saveUser.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdsp.js

#[mitm] 
# hostname = screen-lock.*.com

## bending.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：bending合集
# 下载地址：https://t.cn/AiE8fHDr
# 更新日期：2024-09-04
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bending.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/.+|purchases\/verify) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bending.js

#[mitm]
# hostname = *.oracle.bendingspoonsapps.com

## bizhi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：壁纸-高清墙纸/背景主题
# 下载地址：https://t.cn/A6WmzYvC
# 更新日期：2023-11-20
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bizhi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/leancloud\.emotionwp\.com\/.+\/(classes|batch\/save) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bizhi.js

#[mitm]
# hostname = leancloud.emotionwp.com

## bodian.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：波点音乐
# 下载地址：https://t.cn/A6NLgAZW
# 更新日期：2023-12-11
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bodian.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/bd-api\.kuwo\.cn\/api\/(ucenter\/users|play\/listening\/user|service\/(home\/index|banner\/myPage|advert\/watch)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bodian.js

#[mitm]
# hostname = bd-api.kuwo.cn

## bohejiankang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：薄荷健康-解锁超级会员
# 下载地址：https://t.cn/A69ull4r
# 更新日期：2025-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## bohejiankang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.boohee\.com\/app-interface\/.+\/user\/user_info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bohejiankang.js

#[mitm]
# hostname = api.boohee.com

## boom.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Boom
# 下载地址：https://t.cn/A6f1C1rG
# 更新日期：2023-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## boom.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/boom.js

#[mitm]
# hostname = apimboom2.globaldelight.net

## boring.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Boring Day 壁纸
# 下载地址：https://t.cn/A6WUmTgo
# 更新日期：2025-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## boring.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/boringday\.api\.neuronlabs\.art\/v\d\/(order\/(premium|restore)|my\/info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/boring.js

#[mitm]
# hostname = boringday.api.neuronlabs.art

## caipu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：菜谱大全
# 下载地址：https://t.cn/AijzV2It
# 项目地址：烘焙小屋
# 下载地址：https://t.cn/AipIBR88
# 项目地址：香哈菜谱
# 下载地址：https://t.cn/AipUXQUl
# 更新日期：2025-01-10
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## caipu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api.*\.xiangha\.com\/.+\/([Uu]ser\/(getUserData|info)|pay\/home|dish|home\/getUser|school) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caipu.js

#[mitm]
# hostname = *.xiangha.com

## caiyun.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：彩云天气/彩云天气Pro
# 下载地址：https://t.cn/A66d95hV
# 版本支持：7.11.0
# 更新日期：2024-02-07
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## caiyun.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners|ai\/weather|operation\/homefeatures)|p\/v\d\/(vip_info|user_info|entries|privileges)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun.js
# SVIP地图-48小时预报(方法来源:苍井灰灰)
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun.js

#[mitm]
# hostname = *.cyapi.cn, *.caiyunapp.com

## caiyun_svip.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：彩云天气 解锁SVIP(旧版)
# 下载地址：https://t.cn/A66d95hV
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## caiyun_svip.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun_svip.js

#[mitm]
# hostname = biz.caiyunapp.com

## caiyuntianqi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：彩云天气-净化/解锁SVIP
# 下载地址：https://t.cn/A66d95hV
# 更新日期：2024-09-28
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 
# [filter_local]
# # 禁用上传信息 - 来源: @苍井灰灰
# host, gather.colorfulclouds.net ,reject
# 

## caiyuntianqi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
# 广告净化/弹窗AD/去除亲友卡/去除悬浮模块
^https?:\/\/(ad|biz|wrapper|starplucker)\.cyapi\.cn\/.+\/((activity\?app_name|operation|config|req\?app_name=weather)|v\d\/(trial_card\/info|entries|friend_cards|token\/device)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.cyapi\.cn\/(v\d\/user\?app_name|.+\/v\d\/(vip_info|user_detail)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
# SVIP地图-48小时预报
^https?:\/\/(api|wrapper)\.cyapi\.cn\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

#[mitm]
# hostname = *.cyapi.cn

## calendars.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Calendars 日历/计划
# 下载地址：https://t.cn/A6Kpq9a6
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## calendars.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/.+\/calendarslite\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/calendars.js

#[mitm]
# hostname = license.pdfexpert.com

## ccjt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：虫虫吉他
# 下载地址：https://t.cn/A6loASg1
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ccjt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/cc\.lzjoy\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ccjt.js

#[mitm]
# hostname = cc.lzjoy.com

## changwan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：畅玩空间
# 下载地址：https://play.wo1wan.com
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## changwan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/play\.wo1wan\.com\/nextgame\/igwuser\/userinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/changwan.js

#[mitm]
# hostname = play.wo1wan.com

## chaoxi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：潮汐
# 下载地址：https://t.cn/A6NdGzH4
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## chaoxi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/tide-api\.moreless\.io\/v\d\/users\/self url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/chaoxi.js

#[mitm]
# hostname = tide-api.moreless.io

## chentuan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：陈抟八字
# 下载地址：https://t.cn/A6WbjMn7
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## chentuan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http[s]?:\/\/api\.chentuanbazi\.cn\/(recharge\/vipRechargeList|user\/userInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/chentuan.js

#[mitm]
# hostname = api.chentuanbazi.cn

## chongrichang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：宠日常-科学记录宠物铲屎官的日常
# 脚本功能：解锁VIP
# 下载地址：https://is.gd/283uli
# 更新日期：2026-02-22
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## chongrichang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/chongrichang-api-new\.eveningperson\.com\/v\d+\/User\/getUserInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/chongrichang.js

#[mitm]
# hostname = chongrichang-api-new.eveningperson.com

## cloudfront.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：FT中文网
# 下载地址：https://t.cn/A6OudTtN
# 脚本作者：@ddm1023
# 电报频道：https://t.me/@ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## cloudfront.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.cloudfront\.net\/index\.php\/jsapi\/(paywall|get_story_more_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/cloudfront.js
^https?:\/\/ftmailbox\.cn\/ad_impression\/.+ url reject-200

#[mitm]
# hostname = *.cloudfront.net, ftmailbox.cn

## dashibiji.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：大师笔记
# 下载地址：https://t.cn/A6uAtoTp
# 更新日期：2024-12-24
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## dashibiji.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/masterwaynote\.com\/api\.mobile.+\/account\/me url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dashibiji.js

#[mitm]
# hostname = masterwaynote.com

## daymore.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：DayMore-时尚日记本
# 下载地址：https://t.cn/A6OKkFsC
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## daymore.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.execute-api\.ap-northeast-2\.amazonaws\.com\/product\/apple\/receipt url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/daymore.js

#[mitm]
# hostname = *.execute-api.ap-northeast-2.amazonaws.com

# [删除] dbmeterpro.js 中包含 buy.itunes.apple.com，已删除
## ddbqb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：逗逗表情包
# 下载地址：https://t.cn/A6T3e0nG
# 更新日期：2024-04-25
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ddbqb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.dbbqb\.com\/api\/(refresh\/token|login|sms\/register|user\/expire|orderForm) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ddbqb.js

#[mitm]
# hostname = www.dbbqb.com

## dejianxiaoshuo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：得间小说 解锁会员
# 下载地址：https://t.cn/A6i8BXBm
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# **************************************
# 

## dejianxiaoshuo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/dj\.palmestore\.com\/zyuc\/api\/user\/accountInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dejianxiaoshuo.js

#[mitm]

# hostname = dj.palmestore.com

## diancigaoshou.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：电磁高手-云解析
# 下载地址：https://t.cn/A6N23Igg
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## diancigaoshou.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.diancigaoshou\.com\/api\/cards\/valid url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/diancigaoshou.js

#[mitm]
# hostname = api.diancigaoshou.com

## doka.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：Doka相机
# 脚本功能：解锁Pro
# 下载地址：https://shm.to/doka
# 更新日期：2026-06-14
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## doka.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.yindoka\.com\/apple\/(vip-detail|check-subscription-status|validate-receipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/doka.js

#[mitm]
# hostname = www.yindoka.com

## douchacha.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：抖查查-直播短视频电商数据
# 下载地址：https://t.cn/A6Nq76Nh
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## douchacha.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.douchacha\.com\/api\/(user\/info|order\/get_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/douchacha.js

#[mitm]
# hostname = api.douchacha.com

## dsj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：电视家
# 下载地址：https://t.cn/A6KxaEw8
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## dsj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http[s]?:\/\/(share\.dianshihome\.com\/api\/user\/base\/info|123\.56\.125\.184\/api\/.+\/user\/info|api\.gaoqingdianshi\.com\/api\/ad\/mobile\/config) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dsj.js

#[mitm]
# hostname = share.dianshihome.com, api.gaoqingdianshi.com

## dsjnr.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：倒数纪念日 解锁终身会员
# 下载地址：https://t.cn/A6t6nFst
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# **************************************
# 

## dsjnr.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/day-api\.xixitime\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dsjnr.js

#[mitm]

# hostname = day-api.xixitime.com

## dssy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：大神水印
# 下载地址：https://t.cn/A6Kfbf71
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## dssy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/dashen.*\.shuiyinyu\.com\/m\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dssy.js

#[mitm]
# hostname = dashen*.shuiyinyu.com

## duitang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：推糖-壁纸头像美图社区
# 下载地址：https://t.cn/Ai3pMcdl
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## duitang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http[s]?:\/\/.*\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/duitang.js

#[mitm] 
# hostname = *.duitang.com

## duitang2.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：推糖-壁纸头像美图社区
# 下载地址：https://t.cn/Ai3pMcdl
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## duitang2.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http[s]?:\/\/.*\.duitang\.com\/napi\/people\/me url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/duitang2.js

#[mitm] 
# hostname = *.duitang.com

## dzhtyqy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：电子合同易签约
# 下载地址：https://t.cn/A68OiAir
# 更新日期：2024-08-03
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## dzhtyqy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/iosdzhtyqy\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dzhtyqy.js

#[mitm]
# hostname = iosdzhtyqy.sanwubeixin.cn

## dzyj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：地震预警
# 下载地址：https://t.cn/A6CoMiO5
# 更新日期：2024-04-29
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## dzyj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/mobile-new\.chinaeew\.cn\/v\d\/order\/apple\/vip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/dzyj.js

#[mitm]
# hostname = mobile-new.chinaeew.cn

## elsa.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：ELSA Speak
# 下载地址：https://t.cn/A6nBWQxQ
# 更新日期：2024-11-16
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## elsa.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/pool\.elsanow\.io\/(user\/api\/v\d\/purchase|entitlement\/api\/v\d\/user\/entitlements) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/elsa.js

#[mitm]
# hostname = pool.elsanow.io

## exping.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：exping地图标记
# 下载地址：https://t.cn/A6OZKTpD
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## exping.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.expingworld\.com\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/exping.js

#[mitm]
# hostname = api.expingworld.com

## fanshuxiaoshuo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：番薯小说-解锁VIP
# 下载地址：https://t.cn/A6CX524j
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## fanshuxiaoshuo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/ggs\.manmeng168\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fanshuxiaoshuo.js

#[mitm]

# hostname = ggs.manmeng168.com

## fanyingangqin.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：凡音钢琴
# 下载地址：https://too.st/6UO
# 更新日期：2023-12-18
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## fanyingangqin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/gzfanyin\.com\/api\/ums\/getMember url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fanyingangqin.js

#[mitm]
# hostname = gzfanyin.com

## fileball.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Fileball
# 下载地址：https://t.cn/A6ScGy9g
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用说明：新版已不支持，仅支持1.2.10以下版本
# 
# **************************************
# 

## fileball.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fileball.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/fileball.js
^https:\/\/firebaseremoteconfig\.googleapis\.com\/v\d\/projects\/.*\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/sjyz.js
^https:\/\/app-measurement\.com\/config\/app\/(.*?) url reject

#[mitm]
# hostname = api.revenuecat.com, app-measurement.com, firebaseremoteconfig.googleapis.com

## filmicpro.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：Filmic Pro相机
# 下载地址：https://t.cn/AiE8fHDr
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## filmicpro.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/filmicpro.js

#[mitm]
# hostname = filmicpro.oracle.bendingspoonsapps.com

## filmix.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Filmix
# 下载地址：https://too.st/8Go
# 更新日期：2024-03-08
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## filmix.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/appv2\.filmix\.com\.cn\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/filmix.js

#[mitm]
# hostname = appv2.filmix.com.cn

## fimo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Fimo-复古胶片相机
# 下载地址：https://t.cn/A6ouHsIk
# 更新日期：2025-01-16
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## fimo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/fimo\.appfimo\.com\/fimo-.*\/(user|apple\/certificate|config|startPopConfig|filmAll) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fimo.js

#[mitm]
# hostname = fimo.appfimo.com

## fk_txj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：饭卡 - 记录饮食热量卡路里
# 下载地址：https://t.cn/A60P93t8
# 项目名称：贴心记 - 记录重要的人和事
# 下载地址：https://t.cn/A60P91Xj
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## fk_txj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/fk_txj.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/fk_txj.js

#[mitm]
# hostname = api.revenuecat.com

## fuli.js 从第1行到 [rewrite_local] 前一行：
## [跳过] 未检测到 [rewrite_local]

## fuli.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## gdjp.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：滚动截屏
# 下载地址：https://t.cn/A6AZHHA5
# 更新日期：2024-04-28
# 脚本作者：@Sheepfj
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gdjp.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http:\/\/tailor\.tomax\.xyz\/api\/users\/fetch\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gdjp.js

#[mitm]
# hostname = tailor.tomax.xyz

## gezhi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：格志日记
# 下载地址：https://t.cn/A6oDgPyl
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gezhi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gezhi.js

#[mitm]
# hostname = diary-id.sumi.io

## gkbb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：高考必备
# 下载地址：https://t.cn/A6TwG9bI
# 更新日期：2024-03-21
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gkbb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gkbb.js

#[mitm]
# hostname = api.chuangqi.store

## gszh.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：格式转换
# 下载地址：https://t.cn/A6KtskIp
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gszh.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gszh.js

#[mitm]
# hostname = format-api.netpock.com

## guwendao.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：古文岛
# 下载地址：https://too.st/aZF
# 更新日期：2024-11-14
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## guwendao.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.guwendao\.net\/(api\/user\/getVip|router\/user\/getUserInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/guwendao.js

#[mitm]
# hostname = *.guwendao.net

## gybk.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：光影边框
# 下载地址：https://t.cn/A6QYmcpP
# 更新日期：2024-07-04
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gybk.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/prod\.dengziwl\.com\/light-shadow\/member\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/gybk.js

#[mitm]
# hostname = prod.dengziwl.com

## gylwy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：阳光老挝语
# 下载地址：https://t.cn/A6QE9nvI
# 更新日期：2024-07-07
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## gylwy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.ecigrxy\.cn\/api\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yglwy.js

#[mitm]
# hostname = www.ecigrxy.cn

## hhllq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：狐猴浏览器
# 下载地址：https://t.cn/A6WVGsM1
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## hhllq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/social-api-public\.lemurbrowser\.com\/api\/payment\/getVIPInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/hhllq.js

#[mitm]
# hostname = social-api-public.lemurbrowser.com

## hlj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：婚礼纪
# 下载地址：https://too.st/7OO
# 更新日期：2024-01-27
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## hlj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/(api|www)\.hunliji\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/hlj.js

#[mitm]
# hostname = *.hunliji.com

## huabenxiaoshuo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：话本小说
# 下载地址：2023-12-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## huabenxiaoshuo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/.*\.ihuaben\.com\/(api\/userinfo|book\/app\/(vipReadWaitSeconds|book)|function\/bookservice\/authorInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/huabenxiaoshuo.js

#[mitm]
# hostname = *.ihuaben.com

## hulushike.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：葫芦时刻-电子杂志
# 下载地址：https://t.cn/A6WmsPMe
# 更新日期：2023-11-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## hulushike.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api-search\.hulusaas\.com\/api\/user\/.* url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/hulushike.js

#[mitm]
# hostname = api-search.hulusaas.com

## hyzm.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：绘影字幕 解锁VIP
# 下载地址：https://t.cn/A6oe27Yx
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## hyzm.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.bluepulse\.cn\/bluepulse-caption-server-front\/api\/v1\/\/user\/app-vip-info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/hyzm.js

#[mitm] 
# hostname = api.bluepulse.cn

# [删除] iTunes.js 中包含 buy.itunes.apple.com，已删除
## ilove.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：iLove PDF
# 下载地址：https://t.cn/A62Xkhs6
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ilove.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/service\.ilovepdf\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ilove.js

#[mitm]
# hostname = service.ilovepdf.com

## imagex.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：Imagex-AI图片放大改善图片画质
# 下载工具：https://t.cn/A6NI6KJY
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## imagex.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/imagex.js

#[mitm]
# hostname = api.revenuecat.com

## iscreenfz.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：iScreen-小组件-辅助解锁
# 下载地址：https://t.cn/A6MsPY5O
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## iscreenfz.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/cs\.kuso\.xyz\/configs.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iscreenfz.js
^https?:\/\/pay\.kuso\.xyz\/pay\/pay-check url reject-200

#[mitm]
# hostname = cs.kuso.xyz

## itranslate.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：iTranslate 翻译
# 下载地址：https://t.cn/A6p2IR1g
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用说明：进入App出现付费按[恢复购买]
# 
# **************************************
# 

## itranslate.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/ssl-api\.itranslateapp\.com\/accounts\/.+\/(subscriptions\/verify|marketing\/consent\/status) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/itranslate.js

#[mitm]
# hostname = ssl-api.itranslateapp.com

## iyftv.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：iyf.tv影视
# 下载地址：https://m.iyf.tv
# 更新日期：2024-04-21
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## iyftv.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.iyf\.tv\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iyftv.js

#[mitm]
# hostname = api.iyf.tv

## jd_price_lite.js 从第1行到 [rewrite_local] 前一行：
## [跳过] 未检测到 [rewrite_local]

## jd_price_lite.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## jgjsq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：建工计算器
# 下载地址：https://t.cn/A68YJHGi
# 更新日期：2024-08-05
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用说明：先打开脚本再进去APP登录账号即可
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jgjsq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/calc\.kuaicad\.com\/authority\/verify_vip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jgjsq.js

#[mitm]
# hostname = calc.kuaicad.com

## jiakaobaodian.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：驾考宝典
# 下载地址：https://t.cn/A6NIJYkf
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 温馨提示：不完全解锁，部分功能可用，vip题库不行
# **************************************
# 

## jiakaobaodian.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.kakamobi\.cn\/api\/open url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jiakaobaodian.js

#[mitm]
# hostname = *.kakamobi.cn

## jijianhuilv.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：极简汇率
# 下载地址：https://too.st/60a
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jijianhuilv.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(xremit\.xcurrency|explorer.tratao)\.com\/api\/client\/xtool\/vip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jijianhuilv.js

#[mitm]
# hostname = xremit.xcurrency.com, explorer.tratao.com

## jjhl.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：极速汇率
# 下载地址：https://t.cn/A6ckbDYO
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jjhl.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/explorer\.tratao\.com\/api\/client\/xtool\/vip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjhl.js

#[mitm]
# hostname = explorer.tratao.com

## jjsm.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：极简扫描
# 下载地址：https://t.cn/A6KJaeDD
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jjsm.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/cn\.czur\.cc\/api\/v\d\/User\/info.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjsm.js

#[mitm]
# hostname = cn.czur.cc

## jjxrsl.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：经济学人·商论
# 下载地址：https://t.cn/A60bUTVl
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jjxrsl.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.hummingbird\.businessreview\.global\/api\/subscriptions\/get_active url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjxrsl.js

#[mitm]
# hostname = api.hummingbird.businessreview.global

## jjyc.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：尽简衣橱
# 下载地址：https://t.cn/A6KyHDkl
# 更新日期：2024-05-01
# 脚本作者：chxm1023/@Sheepfj
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jjyc.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/closet\.jinjian\.tech\/api\/v\d\/(users\/profile|apple_app_store\/resolve_receipt|payments\/orders\/sync_from_apple_app_store) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjyc.js

#[mitm]
# hostname = closet.jinjian.tech

## jsqhd.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：计算器HD解锁会员
# 下载地址：http://t.cn/A6xF7wam
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jsqhd.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.40sishi\.com\/(list|currency|calculator)\/user\/profile$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jsqhd.js

#[mitm] 
# hostname = www.40sishi.com

## jssmy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：极速扫描仪
# 下载地址：目前下架了
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jssmy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/scanner\.jianse\.tv\/api\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jssmy.js

#[mitm]
# hostname = scanner.jianse.tv

## jzwnl.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：吉真万年历
# 脚本功能：解锁会员
# 下载地址：https://is.gd/iejNna
# 更新日期：2026-01-17
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jzwnl.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/calendarsrv\.iwzwh\.com\/api\/.+\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jzwnl.js

#[mitm]
# hostname = calendarsrv.iwzwh.com

## jzzwds.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：吉真紫微斗数
# 下载地址：https://t.cn/A68V37I5
# 更新日期：2024-07-26
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## jzzwds.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/zwpp\.wzbz123\.com\/api\/.+\/user\/getzwvipinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jzzwds.js

#[mitm]
# hostname = zwpp.wzbz123.com

## koan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Koan-提问日记
# 下载地址：https://t.cn/A6O55spC
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## koan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/koan\.bopulab\.cn\/(user\/getBriefByUserIdV3|payment\/iosIap\/receipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/koan.js

#[mitm]
# hostname = koan.bopulab.cn

## kuaidi100.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：快递100收件
# 下载地址：https://t.cn/A6Ez6yMk
# 更新日期：2024-09-20
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## kuaidi100.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.kuaidi100\.com\/(mkt\/courier\/open|open\/test|advertisement) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/kuaidi100.js

#[mitm]
# hostname = *.kuaidi100.com

## kuaisushuiyin.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：快速水印
# 下载地址：https://t.cn/A6HjXyiT
# 更新日期：2024-05-30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## kuaisushuiyin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api-qsy\.iiitool\.com\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/kuaisushuiyin.js

#[mitm]
# hostname = api-qsy.iiitool.com

## kuake.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：夸克
# 下载地址：https://t.cn/A69h68E2
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## kuake.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/drive.*\.quark\.cn\/.+\/clouddrive\/(member.+|distribute\/detail.+|capacity\/growth\/info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/kuake.js

#[mitm]
# hostname = drive*.quark.cn

## kwyy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：酷我音乐
# 下载地址：https://t.cn/AipWyJvV
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 脚本来源：https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/kw.js
# 
# **************************************
# 

## kwyy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

# 酷我音乐_AdBlock
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url reject
# 酷我听书_Blockad
https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url reject-dict
# 酷我听书_Blockad
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p\?op=get_advertright url reject-dict
# 酷我音乐_会员
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/kwyy.js
# 酷我音乐_添加已购音乐
^https?:\/\/.*\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2

#[mitm]

# hostname = *.kuwo.cn, *.kwcdn.kuwo.cn, *.lrts.me

## laihua.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：来画
# 下载地址：https://t.cn/A6ptiPqj
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## laihua.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/laipicapp\.laihua\.com\/session\/new url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/laihua.js

#[mitm]
# hostname = laipicapp.laihua.com

## lanjiyin.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：蓝基因-解锁付费功能
# 下载地址：https://t.cn/A6CMvGPe
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## lanjiyin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/tk\.lanjiyin\.com\.cn\/img url reject
^https:\/\/(tk|course)\.lanjiyin\.com\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/lanjiyin.js

#[mitm]

# hostname = *.lanjiyin.com.cn

## lento.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Lento-壁纸
# 下载地址：https://t.cn/A6Yyzepk
# 更新日期：2024-08-06
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## lento.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/lentoapp\.com:8081\/getUserMemberShipInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/lento.js

#[mitm]
# hostname = lentoapp.com

## lepai.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：乐拍
# 下载地址：https://t.cn/A6Qw3XCp
# 更新日期：2024-06-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## lepai.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/lepai-api\.faceqianyan\.com\/(apple\/product|account\/profile|faceFusion|toolCollection) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/lepai.js

#[mitm]
# hostname = lepai-api.faceqianyan.com

## lgxj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：日杂相机，Fomz相机
# 下载地址：https://t.cn/A6KMxlLF
# 下载地址：https://t.cn/A6KMxOrR
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！！
# 
# **************************************
# 

## lgxj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/.*\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/lgxj.js

#[mitm]
# hostname = *.imendon.com

## liangjihui.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：靓机汇(APP+小程序)
# 下载地址：https://t.cn/A6NMLjKA
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## liangjihui.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
# 解锁会员信息
^https?:\/\/guapi\.liangjihui\.com\/(front\/(quote\/look.+|user\/memberInfo)|api) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/liangjihui.js
# 屏蔽顶部滚屏
^https:\/\/ljh\.dianxiaoman\.com\/ljh\/api\/home\/getHomeList url reject

#[mitm]
# hostname = guapi.liangjihui.com, ljh.dianxiaoman.com

## litekrnavi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：视氪地图
# 下载地址：https://t.cn/A61RYcDE
# 更新日期：2025-03-01
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## litekrnavi.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## lofo.js 从第1行到 [rewrite_local] 前一行：
## [跳过] 未检测到 [rewrite_local]

## lofo.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## ltsst.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：旅途随身听(APP+小程序)
# 下载地址：https://t.cn/A60UTceU
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ltsst.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/(user.*\/getInfo|guideScenic) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ltsst.js

#[mitm]
# hostname = www.1314zhilv.com

## luqijianggushi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：陆琪讲故事
# 下载地址：https://t.cn/A6WinsEM
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## luqijianggushi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/www\.luqijianggushi\.com\/api url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/luqijianggushi.js

#[mitm]
# hostname = www.luqijianggushi.com

# [删除] luyin.js 中包含 buy.itunes.apple.com，已删除
# [删除] luyinpro.js 中包含 buy.itunes.apple.com，已删除
## luyinzhuanjia.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：录音专家
# 下载地址：https://t.cn/A6lWVauX
# 更新日期：2023-12-26
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## luyinzhuanjia.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http:\/\/luyintu\.cushuikeji\.cn\/tuv2\.(user\/info|order\/comboDuration|home\/activityAlert) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/luyinzhuanjia.js

#[mitm]
# hostname = luyintu.cushuikeji.cn

## mandu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：漫读-电子书阅读器
# 下载地址：https://t.cn/A6TeeJiV
# 更新日期：2025-01-17
# 脚本作者：@ddm1026
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mandu.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## mate.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Mate-翻译神器 解锁订阅
# 下载地址：https://t.cn/A69OzKuZ
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用方法：先开脚本再开App，失败请重复打开App！
# 
# **************************************
# 

## mate.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/asia\.gikken\.co\/matesync\/(subscription|login|register_user|check_user) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mate.js

#[mitm]
# hostname = asia.gikken.co

## meirikaisang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：每日开嗓
# 脚本功能：解锁练习单元
# 下载地址：https://is.gd/nemzKD
# 更新日期：2026-04-26
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## meirikaisang.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## mgbd.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：木工宝典
# 下载地址：https://t.cn/A6nSLzkO
# 更新日期：2024-11-04
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mgbd.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api-wood\.kaying\.cc\/rest\/user url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mgbd.js

#[mitm]
# hostname = api-wood.kaying.cc

## miaojiexi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：秒解析
# 下载地址：https://too.st/94O
# 更新日期：2024-03-30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## miaojiexi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/tcb-api\.tencentcloudapi\.com\/web url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/miaojiexi.js

#[mitm]
# hostname = tcb-api.tencentcloudapi.com

# [删除] midisz.js 中包含 buy.itunes.apple.com，已删除
## mingxiangxingqiu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 项目名称：冥想星球
# 下载地址：https://t.cn/A6pmsyPj
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mingxiangxingqiu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/kc\.xinli001\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mingxiangxingqiu.js

#[mitm]
# hostname = kc.xinli001.com

## mix.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：MIX-滤镜大师
# 下载地址：https://t.cn/A6WbVOQJ
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mix.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/cdn-bm\.camera360\.com\/api\/(mix\/(getinfo|purchase|recovery)|iap\/check-receipt) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mix.js

#[mitm]
# hostname = cdn-bm.camera360.com

## mmbf.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：慢慢变富
# 脚本功能：解锁VIP
# 下载地址：https://is.gd/Z14wk9
# 更新日期：2025-12-31
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mmbf.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.luyaolab\.cn\/api\/investment\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mmbf.js

#[mitm]
# hostname = www.luyaolab.cn

## mojics.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Moji辞书-日语学习词典
# 下载地址：https://t.cn/A6fK4RkD
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mojics.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.mojidict\.com\/parse\/functions\/getNPrivileges url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mojics.js

#[mitm]
# hostname = api.mojidict.com

## mojitianqi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 项目名称：墨迹天气
# 下载地址：https://t.cn/A69ukfNz
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mojitianqi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.api\.moji\.com\/(sns\/json\/profile\/get_info_.+|json\/member_new\/homepage_info.+|user\/personal\/json\/profile_.+|flycard\/novice|shortvideo\/.+) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mojitianqi.js

#[mitm]
# hostname = *.api.moji.com

## mppmfy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：麦片屏幕翻译
# 下载地址：https://too.st/9uj
# 更新日期：2024-04-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mppmfy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/youxifanyizhushou\.com\/ios\/api\/product\/user\/remain\/ios url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mppmfy.js

#[mitm]
# hostname = youxifanyizhushou.com

## mtxl.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Wink-像修图一样修视频
# 下载地址：https://t.cn/A6ouQvnT
# 项目名称：蛋啵-宝宝版美图秀秀
# 下载地址：https://t.cn/A69AjDYp
# 项目名称：潮自拍
# 下载地址：https://t.cn/A6A2Sybv
# 项目名称：海报工厂
# 下载地址：https://t.cn/A66WBa0v
# 项目名称：Chic-创意胶片相机
# 下载地址：https://t.cn/A6oLDrrK
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mtxl.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxl.js

#[mitm]
# hostname = api-*.meitu.com

## mtxx.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：美图秀秀 解锁SVIP
# 下载地址：https://t.cn/AiN3YLHl
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mtxx.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

#[mitm]
# hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-sub.meitu.com

## mtywj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：猫头鹰文件
# 下载地址：https://t.cn/A6Kotbjs
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mtywj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/www\.skyjos\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtywj.js

#[mitm]
# hostname = www.skyjos.cn

## mygf.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：魔音工坊
# 下载地址：https://too.st/7Sh
# 更新日期：2024-01-30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## mygf.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/moyin-gateway\.moyin\.com\/moyin-account\/v\d\/vip\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mygf.js

#[mitm]
# hostname = moyin-gateway.moyin.com

## myj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：每一迹
# 脚本功能：终生会员
# 下载地址：https://shm.to/myj
# 更新日期：2026-06-06
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## myj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/ink\.timerecord\.cn\/apis\/app\/trace\/get.*UserInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/myj.js

#[mitm]
# hostname = ink.timerecord.cn

## myxj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：美颜相机 解锁VIP
# 下载地址：https://t.cn/A69cNPHr
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# **************************************
# 

## myxj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/myxj.js

#[mitm]

# hostname = *.meiyan.com

# [删除] nianlun3.js 中包含 buy.itunes.apple.com，已删除
## nicegram.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Nicegram(兼容新老旧版)
# 下载地址：https://t.cn/A6ou0MCe
# 更新日期：2026-02-17
# 脚本作者：ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 版本1.4.6一次性解锁：打开APP → 设置 → 选择白色Nicegram → 往下拉找到【恢复购买】
# 版本1.4.7以上非一次性解锁：打开APP → 助手 → 点击【释放您的Nicegram特权】之后关闭APP，重新打开即可
# 
# **************************************
# 

## nicegram.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(nicegram\.cloud\/api\/v\d\/(user\/info|unblock-feature\/get-settings)|restore-access\.indream\.app\/restoreAccess|api\.mbrx\.app\/v\d\/purchase\/ios\/transaction) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/nicegram.js

#[mitm]
# hostname = nicegram.cloud, restore-access.indream.app, api.mbrx.app

## ningmengqds.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：柠檬轻断食
# 下载地址：https://t.cn/A6OOKolN
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ningmengqds.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/fast\.lmfasting\.cn\/api url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ningmengqds.js

#[mitm]
# hostname = fast.lmfasting.cn

## otterlife.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：OtterLife
# 下载地址：https://t.cn/A68TbbDM
# 更新日期：2024-08-06
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## otterlife.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/otter-api\.codefuture\.top\/v\d\/user\/current url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/otterlife.js

#[mitm]
# hostname = otter-api.codefuture.top

## paibanrili.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：排班日历
# 下载地址：https://t.cn/A6Nz3Zuo
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## paibanrili.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/schedule-api\.julanling\.com\/api\/(get_member_info|vip_detail) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/paibanrili.js

#[mitm]
# hostname = schedule-api.julanling.com

## peiyinxiu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：配音秀 解锁会员
# 下载地址：https://t.cn/A6hiqy80
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## peiyinxiu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/iosapi\.peiyinxiu\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/peiyinxiu.js

#[mitm]
# hostname = iosapi.peiyinxiu.com

## photodance.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：PhotoDance
# 下载地址：https://t.cn/A6HK65UJ
# 更新日期：2024-05-24
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## photodance.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/viart-api\.afunapp\.com\/photodance\/(user_api\/(get_user_info|visitor_login)|order_api\/apple_query) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/photodance.js

#[mitm]
# hostname = viart-api.afunapp.com

## picsart.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：Picsart美易
# 下载地址：https://t.cn/A6MxZ5q1
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## picsart.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.meiease\.cn\/shop\/subscription\/(validate|apple\/purchases) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/picsart.js

#[mitm]
# hostname = api.meiease.cn

## pola.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：泼辣修图
# 下载地址：https://t.cn/A60Q8wwl
# 脚本作者：chxm1023
# 数据来源：三岁
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## pola.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.polaxiong\.com\/.+\/payments\/(profiles\/.+\/subscription|appleiap\/receipts\/confirmation) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/pola.js

#[mitm]
# hostname = api.polaxiong.com

# [删除] ptj.js 中包含 buy.itunes.apple.com，已删除
## qianji.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：钱迹-存钱记账小能手
# 下载地址：https://t.cn/A69ztdZy
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qianji.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/qianji\.xxoojoke\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qianji.js

#[mitm]
# hostname = qianji.xxoojoke.com

## qifu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：起伏 解锁VIP
# 下载地址：https://t.cn/A6ouQzMi
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qifu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qifu.js

#[mitm] 
# hostname = api.risingfalling.com

## qingtu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：轻图
# 下载地址：https://t.cn/A6OjOeJY
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qingtu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http[s]s:\/\/purchase-qingtu-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qingtu.js

#[mitm]
# hostname = purchase-qingtu-api.b612kaji.com

## qiyou.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：奇游加速器
# 下载地址：https://t.cn/A6WUkZaO
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qiyou.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.qiyou\.cn\/api\/common_bll\/v\d\/(member\/(login_status|mobile_expire_remind)|client_advertisements) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qiyou.js


#[mitm]
# hostname = api.qiyou.cn

## qnsj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：青柠设计-P图抠图海报
# 下载地址：https://t.cn/A69gPvA3
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qnsj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/.*\.qingning6\.com\/api\/(user\/getUserInfo|team\/teamInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qnsj.js

#[mitm]
# hostname = *.qingning6.com

## qonversion.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Qonversion-合集
# 下载地址：https://t.cn/A68lP8qz
# 更新日期：2024-08-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qonversion.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.qonversion\.io\/v\d\/user\/(init|purchase) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/qonversion.js

#[mitm]
# hostname = api.qonversion.io

## qqjsq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：亲戚计算器
# 下载地址：https://t.cn/A63YM7Yq
# 更新日期：2025-01-30
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## qqjsq.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## renrenshipin.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：人人视频
# 下载地址：https://t.cn/A60DZeo4
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## renrenshipin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.(hujuvod\.com|qwapp\.top)\/(user\/personal\/information|app\/drama\/page) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/renrenshipin.js

#[mitm]
# hostname = api.hujuvod.com, api.qwapp.top

## replica.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Replica-屏幕镜像
# 下载地址：https://t.cn/A6WlGNDi
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## replica.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.apphud\.com\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/replica.js

#[mitm]
# hostname = api.apphud.com

## rljq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：日历假期
# 下载地址：https://t.cn/A60MIBOY
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## rljq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/calendar\.aiyohoo\.com\/api\/.+\/(user\/device|calendar\/dev_auth) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/rljq.js

#[mitm]
# hostname = calendar.aiyohoo.com

## rq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：如期
# 下载地址：https://t.cn/A6KVkB2y
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## rq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/www\.freshhome\.top url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/rq.js

#[mitm]
# hostname = www.freshhome.top

## scjy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：诗词集韵
# 下载地址：https://too.st/8JN
# 更新日期：2024-03-11
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## scjy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/ouyangxunshufa\.azurewebsites\.net\/JiyunAPI url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/scjy.js

#[mitm]
# hostname = ouyangxunshufa.azurewebsites.net

## shanqiuyuedu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：山丘阅读
# 下载地址：https://t.cn/A6o2bCq7
# 更新日期：2024-06-03
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shanqiuyuedu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http:\/\/(m\.815616\.xyz|175\.178\.52\.149:88)\/api\/v\d\/myinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shanqiuyuedu.js

#[mitm]
# hostname = m.815616.xyz

## shiguangxu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：时光序-日程备忘清单
# 下载地址：https://t.cn/A68Fnq52
# 更新日期：2024-08-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shiguangxu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.weilaizhushou\.com\/base\/user\/vip\/getUserVip url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shiguangxu.js

#[mitm]
# hostname = api.weilaizhushou.com

## shimingshizhong.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：使命时钟
# 下载地址：https://t.cn/A6WczcBO
# 更新日期：2025-01-23
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shimingshizhong.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.alar\.my\/v\d\/subscription\/sync url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shimingshizhong.js

#[mitm]
# hostname = api.alar.my

## shuaika.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：帅卡
# 下载地址：https://t.cn/A6urZtuY
# 更新日期：2025-01-14
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shuaika.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.shuaika\.com\/api\/v\d\/vip$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shuaika.js

#[mitm]
# hostname = api.shuaika.com

## shuashuati.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：刷刷题
# 下载地址：https://t.cn/A60szmtc
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shuashuati.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.shuashuati\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shuashuati.js

#[mitm]
# hostname = api.shuashuati.com

## shuiyin.js 从第1行到 [rewrite_local] 前一行：
# 
# /*************************************
# 
# 项目名称：水印宝/闪电水印/熊猫水印/水印全能王
# 下载地址：https://t.cn/A6OkPhjr
# 下载地址：https://t.cn/A6OkP7Fd
# 下载地址：https://t.cn/A6OkPZhJ
# 下载地址：https://t.cn/A6OkPZ3x
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## shuiyin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
https?:\/\/water.*\.yunxiaoguo\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shuiyin.js

#[mitm]
# hostname = water*.yunxiaoguo.cn

# [删除] sjql.js 中包含 buy.itunes.apple.com，已删除
## sjrz.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：时间日志
# 下载地址：https://t.cn/A6QSJY0L
# 更新日期：2024-06-27
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## sjrz.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http:\/\/liujia95\.xyz\/v\d\/user\/(get_user|register) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/sjrz.js

#[mitm]
# hostname = liujia95.xyz

## sjyz.js 从第1行到 [rewrite_local] 前一行：
## [跳过] 未检测到 [rewrite_local]

## sjyz.js 中的 [rewrite_local] 到 hostname:
## [跳过] 未检测到 rewrite_local 或 hostname

## slidebox.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Slidebox相册清理
# 下载地址：https://too.st/6b4
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## slidebox.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*-slidebox-ios-prod\.cloudfunctions\.net\/api_v1 url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/slidebox.js

#[mitm]
# hostname = *-slidebox-ios-prod.cloudfunctions.net

## snow.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：SNOW-系列解锁
# 下载地址：https://t.cn/A6QSe5Tf
# 更新日期：2024-12-06
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## snow.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/snow.js

#[mitm]
# hostname = *.snow.me

## soda.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：SODA-相机
# 下载地址：https://too.st/91w
# 更新日期：2024-03-26
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## soda.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/purchase-soda-api\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/soda.js

#[mitm]
# hostname = purchase-soda-api.snow.me

## soutu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：搜图神器 (先登录账号)
# 下载地址：https://t.cn/A6o9s1WB
# 版本支持：1.7.3
# 更新日期：2023-11-30
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用方法：请先登录账号，再开脚本。
# 
# **************************************
# 

## soutu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.soutushenqi\.com\/(api\/.+\/account\/(token|info)|cykj_community|v\d\/home\/dialog) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/soutu.js

#[mitm]
# hostname = *.soutushenqi.com

## splice.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Splice
# 下载地址：https://t.cn/A600fE6J
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## splice.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/splice\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/splice.js

#[mitm]
# hostname = splice.oracle.bendingspoonsapps.com

## ssfyg.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：实时翻译官
# 下载地址：https://t.cn/A6jMrVwC
# 更新日期：2024-1-23
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ssfyg.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/new\.xslm333\.xyz\/api\/getUserInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ssfyg.js

#[mitm]
# hostname = new.xslm333.xyz

## suishouxie.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：随手写
# 下载地址：https://t.cn/A6OUT4Qn
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## suishouxie.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/www\.kkmop\.com\/vipMsg1 url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/suishouxie.js

#[mitm]
# hostname = www.kkmop.com

## tangguo.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：糖果壁纸
# 下载地址：https://t.cn/A6Wu0rgn
# 更新日期：2023-11-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tangguo.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/w\.5hzs\.com\/player\/index url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tangguo.js

#[mitm]
# hostname = w.5hzs.com

## ticaiku.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：题材库
# 脚本功能：解锁会员
# 下载地址：#小程序://题材库/7lJ9vMf43M3tnZd
# 更新日期：2025-05-19
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ticaiku.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/app\.txcfgl\.com\/api\/app\/user$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ticaiku.js

#[mitm]
# hostname = app.txcfgl.com

## tiku.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：题库大全
# 下载地址：https://t.cn/A6W2GEer
# 下载地址：https://t.cn/A6W2VKyO
# 下载地址：https://t.cn/A6W2IIWG
# 下载地址：https://t.cn/A6W2auz1
# 下载地址：https://t.cn/A6WLb5H7
# 下载地址：https://t.cn/A6WL6A7h
# 下载地址：https://t.cn/A6l20jRY
# 下载地址：https://t.cn/A6lLMblK
# 下载地址：https://t.cn/A6loA1L5
# 下载地址：https://t.cn/A6loArwA
# 下载地址：https://t.cn/A6loAg2d
# 下载地址：https://t.cn/A6loADPp
# 下载地址：https://t.cn/A6loAsh7
# 下载地址：https://t.cn/A6lo2vWo
# 更新日期：2023-12-18
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 特别说明：以上下载链接解锁同作者的所有APP
# **************************************
# 

## tiku.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(iosapi\.yueshuian|question\.tiku\.cqxcj|base\.cmoe|yyapi\.yayingtk|learn\.cqrry|api\.sryx|api\.meigit|question\.api\.anjiazui|app\.bftk|question\.civil\.shaoeyy)\.(com|top|net).+(common|front\/customer|vip\/getValidTime) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tiku.js

#[mitm]
# hostname = iosapi.yueshuian.com, question.tiku.cqxcj.top, base.cmoe.top, yyapi.yayingtk.com, learn.cqrry.com, api.sryx.net, api.meigit.com, question.api.anjiazui.com, app.bftk.com.cn, question.civil.shaoeyy.com

## tingshuzhushou.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：听书助手
# 下载地址：https://too.st/9ux
# 更新日期：2024-04-15
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tingshuzhushou.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.huojiwangluo\.cn\/ting\/user\/.* url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tingshuzhushou.js

#[mitm]
# hostname = www.huojiwangluo.cn

## tizhongxiaoben.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：体重小本 解锁永久VIP
# 下载地址：https://t.cn/A69kYRWI
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 使用说明：非一次性解锁，使用前打开脚本
# 
# **************************************
# 

## tizhongxiaoben.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.jitizhong\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tizhongxiaoben.js

#[mitm]
# hostname = api.jitizhong.com

## tjzs.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：推剧助手
# 下载地址：https://t.cn/A6Tfv8iZ
# 更新日期：2024-04-01
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tjzs.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/film-api\.startupfun\.vip\/api\/v\d\/(wallpaper\/generator|user\/point\/info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tjzs.js

#[mitm]
# hostname = film-api.startupfun.vip

## trancy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Trancy
# 下载地址：https://t.cn/A6H8h54O
# 更新日期：2024-06-02
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## trancy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.trancy\.org\/1\/user\/profile url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/trancy.js

#[mitm]
# hostname = api.trancy.org

## tripsy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Tripsy-旅行规划者
# 下载地址：https://t.cn/A60jMYum
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tripsy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/firstclass\.tripsy\.app\/api\/.+\/receipt\/update url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tripsy.js

#[mitm]
# hostname = firstclass.tripsy.app

## ttqjt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：图图记账
# 下载地址：https://t.cn/A6JZS4a0
# 项目名称：WidgetArt-自定义桌面小组件
# 下载地址：https://t.cn/A6GugI9C
# 项目名称：Apollo-记录你的影视生活
# 下载地址：https://t.cn/A6X7TuG8
# 项目名称：Aphrodite
# 下载地址：https://t.cn/A6MavcIV
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ttqjt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ttqjt.js

#[mitm]
# hostname = api.revenuecat.com

## tuqu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：图趣AI
# 下载地址：https://t.cn/A6WxvZTU
# 更新日期：2024-04-02
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tuqu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/meitu\.minecaller\.com\/api\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tuqu.js

#[mitm]
# hostname = meitu.minecaller.com

## tuzhitong.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：图纸通
# 下载地址：https://t.cn/A6pbMy8f
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## tuzhitong.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.tuzhitong\.com\/api\/User\/GetUserVipInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/tuzhitong.js

#[mitm]
# hostname = api.tuzhitong.com

## uua.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：uua涩涩视频
# 下载地址：https://m.uaa002.com
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## uua.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(api|m)\.uaa.*\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/uua.js

#[mitm]
# hostname = *.uaa*.com

## vn.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：VN-视频剪辑
# 下载地址：https://t.cn/A6f4hPxo
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# **************************************
# 

## vn.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/api2\.vlognow\.me\/vn-pay\/api\/v1\/public\/iap\/receipt\/status?(.*?)*$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/vn.js

#[mitm]

# hostname = api2.vlognow.me

## vsco.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：VSCO Pro
# 下载工具：https://t.cn/AiOSSyU9
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## vsco.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/vsco.js

#[mitm]
# hostname = api.revenuecat.com

## wacaijizhang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：挖财记账
# 下载地址：https://t.cn/A6SkblaQ
# 更新日期：2024-07-08
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wacaijizhang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/jz\.wacaijizhang\.com\/(api\/(my\/v\d|vipmember\/v\d\/index|usercenter\/userInfo)|jz-activity\/bkk-frontier\/api\/vipmember\/v\d\/index) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wacaijizhang.js

#[mitm]
# hostname = jz.wacaijizhang.com

## wannianli.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：万年历
# 下载地址：https://t.cn/A6lrFCm4
# 更新日期：2024-01-05
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wannianli.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.jiemengjia\.com\/(member\/(member_info|pay_verify_new|create_order)|dialogue\/adspace) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wannianli.js

#[mitm]
# hostname = *.jiemengjia.com

## wenzhenbazi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：问真八字
# 脚本功能：解锁VIP
# 下载地址：https://is.gd/ePYLZd
# 更新日期：2026-01-09
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wenzhenbazi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/bzpp3\.iwzbz\.com\/api\/.+\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wenzhenbazi.js

#[mitm]
# hostname = bzpp3.iwzbz.com

## wenzhenpaipan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：问真排盘
# 下载地址：https://too.st/5tQ
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wenzhenpaipan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wenzhenpaipan.js

#[mitm]
# hostname = bzpp2.iwzbz.com

## wfzy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：悟饭掌悦 解锁VIP
# 下载地址：https://t.cn/A6o114Kq
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wfzy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^http:\/\/iosv2\.cjapi\.5fun\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wfzy.js

#[mitm]
# hostname = iosv2.cjapi.5fun.com

## wlingua.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Wlingua
# 下载地址：https://t.cn/A6EEe5Bs
# 更新日期：2024-10-13
# 脚本作者：@David_Hex01
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wlingua.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.wlingua\.io\/v\d+\/user\/\d+\/meta-course\/\d+\/get$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wlingua.js

#[mitm]
# hostname = api.wlingua.io

## woniushuimian.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：蜗牛睡眠
# 下载地址：https://t.cn/A6NBzdYh
# 更新日期：2024-12-07
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## woniushuimian.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/woniushuimian.js

#[mitm]
# hostname = snailsleep.net

# [删除] wordios.js 中包含 buy.itunes.apple.com，已删除
## wsgj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：网速管家 解锁VIP（美区下载）
# 下载地址：https://t.cn/A6ou0r5U
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# **************************************
# 

## wsgj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wsgj.js

#[mitm]

# hostname = api-v3.speedtest.cn

## wxts.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：微信听书
# 下载地址：https://t.cn/A6pj4xeR
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wxts.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/i\.at\.qq\.com\/pay\/memberinfo.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wxts.js

#[mitm]
# hostname = i.at.qq.com

## wywnds.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：网易蜗牛读书
# 下载地址：https://t.cn/A6NBBLeU
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## wywnds.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/wywnds.js

#[mitm]
# hostname = p.du.163.com

## xbyj.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：小倍养基
# 脚本功能：VIP功能
# 下载地址：#小程序://小倍养基/9ZYBMQyC3GUAkwg
# 更新日期：2026-04-17
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xbyj.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/apiv2\.xiaobeiyangji\.com\/api\/app\/user\/to-vip-invitation url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xbyj.js

#[mitm]
# hostname = apiv2.xiaobeiyangji.com

## xdkt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：小滴课堂
# 下载地址：https://t.cn/A6T1XX5Z
# 更新日期：2024-07-03
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xdkt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/api-v2\.xdclass\.net\/api\/account\/v\d\/(detail|login) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xdkt.js

#[mitm]
# hostname = api-v2.xdclass.net

# [删除] xgqd.js 中包含 buy.itunes.apple.com，已删除
## xiangyubizhi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：香芋壁纸
# 下载地址：https://t.cn/A6HvnlbI
# 更新日期：2024-05-03
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xiangyubizhi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(?:sdk\.)?xiangyubizhi\.com\/(v\d\/front|notify\/ios) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiangyubizhi.js

#[mitm]
# hostname = sdk.xiangyubizhi.com, xiangyubizhi.com

## xiaofangxing.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：消防行
# 下载地址：https://t.cn/A6OsSXGV
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xiaofangxing.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.xfx119\.com\/ksVRExamSystem\/validityTerm url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiaofangxing.js

#[mitm]
# hostname = www.xfx119.com

## xiaokaobao.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：消考宝-不完整版
# 下载地址：https://too.st/bw9
# 更新日期：2024-10-21
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xiaokaobao.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.119xkb\.com\/api\/(theory|user|index|type|Practical) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiaokaobao.js

#[mitm]
# hostname = www.119xkb.com

## xiaomaizaixian.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：小麦在线
# 下载地址：https://t.cn/A6TG09ZZ
# 更新日期：2024-03-27
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xiaomaizaixian.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.xiaomaigongkao\.com\/AppApi\/(vip|StartPage\/welcome|Member\/indexHangingWindow|Course\/(curriculum|details)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiaomaizaixian.js

#[mitm]
# hostname = www.xiaomaigongkao.com

## xiaoshishang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：小时尚 解锁VIP
# 下载地址：https://t.cn/A6Xr4Kjn
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xiaoshishang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https?:\/\/kongque\.twan\.cn\/index.+\/admin\/appberrycustomer.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiaoshishang.js

#[mitm]

# hostname = kongque.twan.cn

## xijiangshici.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：西江诗词 解锁高级版
# 下载工具：https://t.cn/A6CFTG1l
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## xijiangshici.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xijiangshici.js

#[mitm]
# hostname = api.revenuecat.com

## xinzang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：心脏+
# 下载地址：https://too.st/5DK
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xinzang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.995120\.cn\/mini\/api\/appleplus\/ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xinzang.js

#[mitm]
# hostname = api.995120.cn

## xsdg.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：像素蛋糕
# 下载地址：https://t.cn/A6ltnOFr
# 更新日期：2023-12-13
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xsdg.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.pixcakeai\.com\/v1\/api\/app\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xsdg.js

#[mitm]
# hostname = api.pixcakeai.com

## xxbzdq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：小熊壁纸大全
# 下载地址：https://t.cn/A6Yka1VF
# 更新日期：2024-03-14
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xxbzdq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/wallpaper\.jingqueyun\.com\/\/index\.php\/\/(user\/getUserInfo|download) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xxbzdq.js

#[mitm]
# hostname = wallpaper.jingqueyun.com

## xxg.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：小习惯-打卡App 解锁VIP
# 下载地址：https://t.cn/A69lQVtI
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# **************************************
# 

## xxg.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/xianbeikeji\.com\/daily\/app\/user\/query url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xxg.js

#[mitm]

# hostname = xianbeikeji.com

## xzimu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：X字幕
# 下载地址：https://is.gd/50cZFy
# 更新日期：2026-04-21
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## xzimu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/apps\.tltgame\.com\/api\/user\/(updateStatus|randomRegister) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xzimu.js

#[mitm]
# hostname = apps.tltgame.com

## xzjhz.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：小组件盒子 解锁永久VIP
# 下载地址：https://t.cn/A6oDCwJ6
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# **************************************
# 

## xzjhz.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/widget-box-api\.codefuture\.top\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xzjhz.js

#[mitm]

# hostname = widget-box-api.codefuture.top

## yaowangbohe.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：遥忘/薄荷壁纸
# 下载地址：https://t.cn/A6lK4Phk
# 下载地址：https://t.cn/A6NhuR3U
# 更新日期：2023-12-22
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yaowangbohe.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.whalean\.com\/(poseidon-service\/api\/user|member\/userMemberHomePageV2|hestia-service\/api\/wpUser\/getUserInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yaowangbohe.js

#[mitm]
# hostname = *.whalean.com

## ydjl.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：阅读记录 解锁VIP
# 下载地址：https://t.cn/A6GJPYdo
# 温馨提示：每次使用需打开脚本，非一次性解锁
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️
# 
# **************************************
# 

## ydjl.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/app\.yidiansz\.com\/api\/.+\/app\/user\/info?(.*?)*$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ydjl.js

#[mitm]

# hostname = app.yidiansz.com

## yeguoyuedu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：野果阅读-外区下载
# 下载地址：https://t.cn/A6NTIw89
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yeguoyuedu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/yeguo\.236api\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yeguoyuedu.js

#[mitm]
# hostname = yeguo.236api.com

## yglwy.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：阳光老挝语
# 下载地址：https://t.cn/A6QE9nvI
# 更新日期：2024-07-07
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yglwy.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.ecigrxy\.cn\/api\/(user\/info|login) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yglwy.js

#[mitm]
# hostname = www.ecigrxy.cn

## yifeijizhang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一飞记账
# 下载地址：https://t.cn/A6Oth7tC
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yifeijizhang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/jz\.jarstones\.com\/api url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yifeijizhang.js

#[mitm]
# hostname = jz.jarstones.com

## yijiankoutu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一键扣图
# 下载地址：https://t.cn/A6pdVNzJ
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yijiankoutu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.mattingm\.com\/receipt_api\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yijiankoutu.js

#[mitm]
# hostname = api.mattingm.com

## yijietu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：易截图
# 下载地址：https://t.cn/A6TQziCW
# 更新日期：2024-04-20
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yijietu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/1jietu\.com\/apiv2\/(user|ad) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yijietu.js

#[mitm]
# hostname = 1jietu.com

## yimujizhang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一木记账
# 下载地址：https://t.cn/A6YRLuSR
# 更新日期：2024-03-03
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yimujizhang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/yimuapp\.com:8082\/bookkeeping\/user\/getUserInfoById url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yimujizhang.js

#[mitm]
# hostname = yimuapp.com

## yimuqingdan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一木清单
# 下载地址：https://t.cn/A6HLNxgY
# 更新日期：2024-05-09
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yimuqingdan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/yimutodo\.com\/api\/v\/mtop\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yimuqingdan.js

#[mitm]
# hostname = yimutodo.com

# [删除] yinpinjianji.js 中包含 buy.itunes.apple.com，已删除
## yiqilianqin.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一起练琴
# 下载地址：https://t.cn/A6OT6Ald
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yiqilianqin.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.(.*lianqin.*|mangofuture)\.(com|cn)\/client\/v\d\/(user_vip|my_info) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yiqilianqin.js

#[mitm]
# hostname = api.*lianqin*.*, api.mangofuture.cn

## yitianyuedu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一天阅读 解锁VIP
# 下载地址：https://t.cn/A6C6jqJt
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yitianyuedu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/novel\.test\.onedayapp\.cn\/login\/sync.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yitianyuedu.js

#[mitm]

# hostname = novel.test.onedayapp.cn

## yiyan.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目功能：一言 解锁会员/净化广告
# 下载地址：https://t.cn/Aini0veg
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yiyan.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yiyan.js

#[mitm]
# hostname = app.yiyan.art

## yiyujizhang.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：一羽记账
# 下载地址：https://t.cn/A6Hh0Gsw
# 更新日期：2024-05-04
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yiyujizhang.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.yiyujizhang\.cn\/yiyujizhang\/vip\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yiyujizhang.js

#[mitm]
# hostname = www.yiyujizhang.cn

## yjb.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：养基宝
# 下载地址：https://t.cn/A6OIswyz
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yjb.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/.*\.yangjibao\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yjb.js

#[mitm]
# hostname = *.yangjibao.com

## yjhh.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目功能：意间Ai绘画
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# *****************************************
# 

## yjhh.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/app\.yjai\.art:30108\/painting\/site\/getUserInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yjhh.js

#[mitm]

# hostname = app.yjai.art

## yonekura.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Icon Killer
# 下载地址：https://t.cn/A6py6nmc
# 项目名称：字体册
# 下载地址：https://t.cn/A6py6uxY
# 项目名称：充电助手
# 下载地址：https://t.cn/A6py63ac
# 项目名称：声波助手
# 下载地址：https://t.cn/A6py610v
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yonekura.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.yonekura\.cn\/.+\/uicommon\/getuser url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yonekura.js

#[mitm]
# hostname = api.yonekura.cn

## youpume.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：有谱么
# 下载地址：https://t.cn/A60Vxtkh
# 脚本作者：chxm1023
# 特别感谢：@Baby，提供数据
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## youpume.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/youpume.js

#[mitm]
# hostname = yopu.co

## ysgs.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：雅俗共赏
# 下载地址：https://t.cn/A6Q91kpO
# 项目名称：高定素材大师
# 下载地址：https://t.cn/A6Q9dV7M
# 更新日期：2024-06-29
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ysgs.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/apps-api\.(lianaishouce|lingege)\.cn\/user\/(public\/login.*|getUserInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ysgs.js

#[mitm]
# hostname = apps-api.lianaishouce.cn, apps-api.lingege.cn

## ysxz.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：云上写作
# 下载地址：https://t.cn/A6EbmQL2
# 更新日期：2024-09-25
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## ysxz.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.yunshangxiezuo\.com\/api\/getAuthenticate url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ysxz.js

#[mitm]
# hostname = www.yunshangxiezuo.com

## yuedujilu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：阅读记录
# 下载地址：https://t.cn/A6TEUZgw
# 更新日期：2024-04-22
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yuedujilu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/app\.yidiansz\.com\/api\/v\d\/(app\/user\/info|banner) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yuedujilu.js

#[mitm]
# hostname = app.yidiansz.com

# [删除] yueduqi.js 中包含 buy.itunes.apple.com，已删除
## yueqi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：17个App合集
# 下载地址：https://t.cn/A6OKWoM9
# 下载地址：https://t.cn/A6OKWO3Y
# 下载地址：https://t.cn/A6OKWjW4
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 特别说明：三个地址，全家桶，总共17个APP左右。
# 
# **************************************
# 

## yueqi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/.*api\.quthing\.com\/(.+\/vip|vip|student|user|appearance|background|rest) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yueqi.js

#[mitm]
# hostname = *api.quthing.com

## yunting.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：云听 全国电台/有声听书
# 下载地址：https://t.cn/A6ouQ21g
# 版本支持：7.0.35
# 更新日期：2024-02-11
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## yunting.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
(^https?:\/\/(ytmsout|ytapi|getway)\.radio\.cn|60\.205\.171\.165)\/(contentBiz|publish|rights|(user|ytsrv\/srv)\/(appUser|webPage)\/getUserInfo|app.+) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/yunting.js

#[mitm]
# hostname = *.radio.cn, 60.205.171.165

## zhfqjt.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：手机扫描
# 下载地址：https://t.cn/A6KcuPty
# 项目名称：图片编辑
# 下载地址：https://t.cn/A6KcuGEk
# 项目名称：九宫格切图
# 下载地址：https://t.cn/A6KcuVV8
# 项目名称：头像制作
# 下载地址：https://t.cn/A6KcuxvH
# 项目名称：早安打卡
# 下载地址：https://t.cn/A6Kcuijk
# 项目名称：配音
# 下载地址：https://t.cn/A6KcuPty
# 更新日期：2023-12-01
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zhfqjt.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
http:\/\/.*\.dicallapp\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhfqjt.js

#[mitm]
# hostname = *.dicallapp.com

## zhhst.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：字画幻术图
# 下载地址：https://t.cn/A6OK0wQh
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zhhst.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.zihuaai\.com\/v\d\/users url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhhst.js

#[mitm]
# hostname = api.zihuaai.com

## zhiliao.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：知了-RSS聚合阅读
# 下载地址：https://t.cn/A6HJDSMI
# 更新日期：2024-05-20
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zhiliao.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api\.ivrfun\.com\/pingx\/v\d\/user\/getInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhiliao.js

#[mitm]
# hostname = api.ivrfun.com

## zhinengzhushou.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：智能助手
# 下载地址：https://t.cn/A6lVgFg6
# 版本支持：1.0.3
# 更新日期：2023-12-14
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zhinengzhushou.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhinengzhushou.js
^https?:\/\/(www\.kaolahome\.com\/xunnews|cat-revenuecat-qscqkotbrh\.cn-hongkong\.fcapp\.run)\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhinengzhushou.js

#[mitm]
# hostname = www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run

## zhitu.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：Lens智图-画质增强&二次元AI作画
# 下载地址：https://t.cn/A6NIfo7O
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zhitu.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhitu.js

#[mitm] 
# hostname = api.revenuecat.com

## zhuishushenqi.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：追书神器
# 下载地址：https://t.cn/A6Nm0RuT
# 更新日期：2024-05-12
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 效果说明：付费内容未解锁，解锁听书/去广告
# 
# **************************************
# 

## zhuishushenqi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
# VIP/净化
^https?:\/\/.*\.zhuishushenqi\.com\/(user|charge\/voice\/state|pay\/products|advert_center|push\/pop-config|book\/recommend-pop|api|video\/adConfig|book\/bookshelf.*|activity\/popup\/scenes\/init) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zhuishushenqi.js
# 开屏广告/也可去除其他APP的广告，用处广泛
^https?:\/\/.*\.pangolin-sdk-toutiao.*\.com url reject
^https?:\/\/mhjk\.1391\.com url reject-200
^https?:\/\/opencloud\.wostore\.cn url reject-200
^https?:\/\/open\.e\.kuaishou\.com url reject-200
^https?:\/\/mi\.gdt\.qq\.com url reject-200
^https?:\/\/mobads\.baidu\.com url reject-200
^https?:\/\/ios\.bugly\.qq\.com url reject-200
^https?:\/\/sdk\.e\.qq\.com url reject-200
^https?:\/\/analytics\.oceanengine\.com url reject-200

#[mitm]
# hostname = *.zhuishushenqi.com, *.pangolin-sdk-toutiao*.com, mhjk.1391.com, opencloud.wostore.cn, open.e.kuaishou.com, mi.gdt.qq.com, mobads.baidu.com, ios.bugly.qq.com, sdk.e.qq.com, analytics.oceanengine.com

## zidongdianjiqi.js 从第1行到 [rewrite_local] 前一行：
# /****************************************
# 
# 项目名称：自动点击器-Auto Clicker
# 下载工具：https://t.cn/A6NIJZK9
# 脚本作者：chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# *****************************************
# 

## zidongdianjiqi.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zidongdianjiqi.js

#[mitm]
# hostname = api.revenuecat.com

## zjsg.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：指尖时光
# 下载地址：https://too.st/5Dh
# 更新日期：2024-01-28
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zjsg.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/integral2\.(dasyibalang|zhijiantime)\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zjsg.js

#[mitm]
# hostname = integral2.*.com

## znqdq.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：智能抢答器
# 脚本功能：解锁会员
# 下载地址：https://t.cn/A6g6Zm0G
# 更新日期：2025-05-18
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## znqdq.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/qdq\.9sm\.net\/api\/userInfo\/getUserInfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/znqdq.js

#[mitm]
# hostname = qdq.9sm.net

## zpqlds.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：PhotoSlip-照片清理大师
# 下载地址：https://t.cn/A6XMsIv7
# 使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# **************************************
# 

## zpqlds.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]

^https:\/\/www2\.tigeroom\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zpqlds.js

#[mitm] 

# hostname = www2.tigeroom.com

## zyqmds.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：周易起名大师
# 下载地址：https://t.cn/A6EhpFZM
# 更新日期：2024-09-19
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zyqmds.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.zhouyilive\.com\/qm-api\/nm_user\.php url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zyqmds.js

#[mitm]
# hostname = www.zhouyilive.com

## zyyad.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 应用名称：赵云与阿斗-小游戏
# 脚本功能：免广告领奖励
# 下载地址：https://shm.to/zyyad
# 更新日期：2026-06-20
# 脚本作者：@ddm1023
# 电报频道：https://t.me/ddm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zyyad.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/api.*\.mihuangame\.com\/api\/v\d\/sys\/user\/login url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zyyad.js

#[mitm]
# hostname = api*.mihuangame.com

## zztx.js 从第1行到 [rewrite_local] 前一行：
# /*************************************
# 
# 项目名称：杂志天下
# 下载地址：https://t.cn/A6ObfXUi
# 脚本作者：chxm1023
# 电报频道：https://t.me/chxm1023
# 使用声明：⚠️仅供参考，🈲转载与售卖！
# 
# **************************************
# 

## zztx.js 中的 [rewrite_local] 到 hostname:
#[rewrite_local]
^https?:\/\/www\.fuyoutech\.club\/magworld\/member\/status url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/zztx.js

#[mitm]
# hostname = www.fuyoutech.club


hostname = *-api.notedapp.io,*-slidebox-ios-prod.cloudfunctions.net,*.airdroid.cn,*.aliyundrive.com,*.alipan.com,*.aoscdn.com,*.aoscdn.com,*.apsapp.cn,*.apphud.com,*.camera360.com,*.camscanner.com,*.intsig.net,*.cloudfront.net,ftmailbox.cn,*.cloudfunctions.net,*.appsflyersdk.com,*.cyapi.cn,*.cyapi.cn,*.caiyunapp.com,*.dicallapp.com,*.duitang.com,*.execute-api.ap-northeast-2.amazonaws.com,*.grammarly.com,*.guwendao.net,*.hunliji.com,*.ihuaben.com,*.imendon.com,*.jiemengjia.com,*.julanling.com,*.kuaidi100.com,*.kuwo.cn,*.kwcdn.kuwo.cn,*.lrts.me,*.lanjiyin.com.cn,*.linearity.io,*.lingvist.com,*.meiyan.com,*.oracle.bendingspoonsapps.com,*.qingning6.com,*.radio.cn,60.205.171.165,*.rhinox*.com,appss.linhongshi.com,*.snow.me,*.soutushenqi.com,*.uaa*.com,*.videoshowiosglobalserver.com,*.enjoy-mobi.com,*.vlognow.me,*.whalean.com,*.xiangha.com,*.xiuxiu.meitu.com,api.posters.meitu.com,api-sub.meitu.com,*.yangjibao.com,*.zhuishushenqi.com,*.pangolin-sdk-toutiao*.com,mhjk.1391.com,opencloud.wostore.cn,open.e.kuaishou.com,mi.gdt.qq.com,mobads.baidu.com,ios.bugly.qq.com,sdk.e.qq.com,analytics.oceanengine.com,*api.quthing.com,*xmind.*,1jietu.com,accounts.agenda.com,api*.mihuangame.com,api-*.facereplacerext.com,api-*.meitu.com,api-qsy.iiitool.com,api-search.hulusaas.com,api-v2.xdclass.net,api-v3.speedtest.cn,api-wood.kaying.cc,api.*lianqin*.*,api.mangofuture.cn,api.adapty.io,api.alar.my,api.apphud.com,api.bluepulse.cn,api.boohee.com,api.changecollective.com,api.chentuanbazi.cn,api.chuangqi.store,api.craft.do,api.deepfaker.app,api.diancigaoshou.com,api.douchacha.com,api.everyday.app,api.expingworld.com,api.getdailyart.com,api.hechuangxinxi.xyz,api.hujuvod.com,api.qwapp.top,api.intelimeditor.com,api.ivrfun.com,api.iyf.tv,api.jitizhong.com,api.mattingm.com,api.meiease.cn,api.moises.ai,api.mojidict.com,api.open.loveclip.site,api.pixcakeai.com,api.polaxiong.com,api.qiyou.cn,api.qonversion.io,api.rawpixlive.com,api.revenuecat.com,api.revenuecat.com,api.rc-backup.com,api.revenuecat.com,app-measurement.com,firebaseremoteconfig.googleapis.com,api.risingfalling.com,api.shuaika.com,api.timetreeapp.com,api.trancy.org,api.tuzhitong.com,api.weilaizhushou.com,api.wlingua.io,api.yonekura.cn,api.zihuaai.com,api2.vlognow.me,apimboom2.globaldelight.net,apiv2.somuseai.com,apiv2.xiaobeiyangji.com,app.kqwl.site,app.txcfgl.com,app.yidiansz.com,app.yiyan.art,app.yjai.art,apps-api.lianaishouce.cn,apps-api.lingege.cn,apps.tltgame.com,appv2.filmix.com.cn,asia.gikken.co,backend.getdrafts.com,baimiao.uzero.cn,bd-api.kuwo.cn,bellybook-app-api.bellybook.cn,billing-ios.wallpaperscraft.com,biz.caiyunapp.com,book.wetapapp.com,boringday.api.neuronlabs.art,bzpp3.iwzbz.com,calc.kuaicad.com,calendarsrv.iwzwh.com,cc.lzjoy.com,cdn-bm.camera360.com,chongrichang-api-new.eveningperson.com,closet.jinjian.tech,cn.czur.cc,creaceed.com,cs.kuso.xyz,cubox.*,d1hzbu30hrhkoe.cloudfront.net,dashen*.shuiyinyu.com,day-api.xixitime.com,dayone.app,enrichment-api.superwall.com,diary-id.sumi.io,dj.palmestore.com,drive*.quark.cn,explorer.tratao.com,fast.lmfasting.cn,film-api.startupfun.vip,filmicpro.oracle.bendingspoonsapps.com,fimo.appfimo.com,firstclass.tripsy.app,format-api.netpock.com,ggs.manmeng168.com,guapi.liangjihui.com,ljh.dianxiaoman.com,gzfanyin.com,i.at.qq.com,iap.etm.tech,ifttt.com,ink.timerecord.cn,iosapi.peiyinxiu.com,iosapi.yueshuian.com,question.tiku.cqxcj.top,base.cmoe.top,yyapi.yayingtk.com,learn.cqrry.com,api.sryx.net,api.meigit.com,question.api.anjiazui.com,app.bftk.com.cn,question.civil.shaoeyy.com,iosdzhtyqy.sanwubeixin.cn,iosv2.cjapi.5fun.com,jz.jarstones.com,jz.wacaijizhang.com,kkr-user.tapque.com,koan.bopulab.cn,kongque.twan.cn,laipicapp.laihua.com,lcs-mobile-cops.adobe.io,leancloud.emotionwp.com,lentoapp.com,lepai-api.faceqianyan.com,license.pdfexpert.com,liujia95.xyz,luyintu.cushuikeji.cn,m.815616.xyz,masterwaynote.com,meitu.minecaller.com,mobile-api.adguard.org,mobile-new.chinaeew.cn,mobileapp.wuyamusic.com,moyin-gateway.moyin.com,my.getslopes.com,new.xslm333.xyz,nicegram.cloud,restore-access.indream.app,api.mbrx.app,notability.com,novel.test.onedayapp.cn,open3.vistastory.com,otter-api.codefuture.top,ouyangxunshufa.azurewebsites.net,p.du.163.com,pan.baidu.com,pgapi.photogrid.app,play.wo1wan.com,pool.elsanow.io,prod.dengziwl.com,purchase-*-api.*.com,user-kaji-api.b612kaji.com,purchase-qingtu-api.b612kaji.com,purchase-soda-api.snow.me,qdq.9sm.net,qianji.xxoojoke.com,rc.visionarytech.ltd,receipt-verifier.cdwapi.com,scanner.jianse.tv,schedule-api.julanling.com,scibug.com,screen-lock.*.com,sdk.xiangyubizhi.com,xiangyubizhi.com,service.ilovepdf.com,service.perfect365.com,share.dianshihome.com,api.gaoqingdianshi.com,snailsleep.net,social-api-public.lemurbrowser.com,ssl-api.itranslateapp.com,subscription-api.lyrebirdstudio.net,tailor.tomax.xyz,tcb-api.tencentcloudapi.com,tide-api.moreless.io,translator.felo.me,viart-api.afunapp.com,w.5hzs.com,wallpaper.jingqueyun.com,water*.yunxiaoguo.cn,widget-box-api.codefuture.top,www.119xkb.com,www.40sishi.com,www.dbbqb.com,www.ecigrxy.cn,www.freshhome.top,www.fuyoutech.club,www.huojiwangluo.cn,www.kaolahome.com,cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run,www.kkmop.com,www.luqijianggushi.com,www.luyaolab.cn,www.skyjos.cn,www.xfx119.com,www.xiaomaigongkao.com,www.yindoka.com,www.yiyujizhang.cn,www.yunshangxiezuo.com,www.zhouyilive.com,www2.tigeroom.com,xianbeikeji.com,xremit.xcurrency.com,explorer.tratao.com,yeguo.236api.com,yimuapp.com,yimutodo.com,youxifanyizhushou.com,zwpp.wzbz123.com, *.api.moji.com, *.kakamobi.cn, *.wps.cn, api-production.endel.io, api.995120.cn, api.hummingbird.businessreview.global, api.shuashuati.com, bzpp2.iwzbz.com, calendar.aiyohoo.com, firstclass.tripsy.app, focos.oracle.bendingspoonsapps.com, integral2.*.com, kc.xinli001.com, splice.oracle.bendingspoonsapps.com, twios.styleart.cn, www.1314zhilv.com, yopu.co, zy6kcqa01a.execute-api.us-east-2.amazonaws.com
