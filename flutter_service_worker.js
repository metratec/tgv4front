'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d497f7408d725a59cb7d561188bd3fc9",
"favicon.ico": "5fef7d3443edc27e340ae2669d5dc51d",
"index.html": "830d3860823e27d5c788a97c72a4438f",
"/": "830d3860823e27d5c788a97c72a4438f",
"main.dart.js": "c7848d62208742ed3ccbfdca3dc76a91",
"manifest.json": "02ab603ad9e1c1a57d5e63093879b418",
".git/ORIG_HEAD": "16cc525f727a322488f80b6144f31757",
".git/config": "eee31ac8d772a0c7bc559d28730826ec",
".git/objects/0d/1237f84300a95cd057701b8ddf4c006ba2a985": "68fd9fad0baba54a3d5f9f84e74897a6",
".git/objects/95/f5d1d789bad832f9f54d5f14266b6a5ebe1c6e": "084350156fb9b79a612ba52fddd5b6dd",
".git/objects/59/56abdd406ed61dfb2e365e8e8a53411404f7b8": "59e6e37e752b1b5b39e89b5e7cc27e79",
".git/objects/0c/572a256a6297b0c32a253b9ad4af977c0419da": "f1ee93fb2ec6229d92b895b4f88b3015",
".git/objects/3e/4e17b4a49bfe4171988a029dda69007ea5fa25": "470f4b14a4ead1dd0ee0a506c9ffb455",
".git/objects/50/922c259490d92519e5aacef0ad29669f6359ac": "7d34b848d11e3562f05162ee53507e98",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/8622f67bffda70fc2d7f6ff2f2ad6f3078fd08": "731b64a59569a859ccc7057722b737a4",
".git/objects/6f/86e6500e221ee26af01f8b04275a2f929493bd": "b74d99bbc0ce435680a4a7b38a88c3d8",
".git/objects/6f/b8cd1181550e8a962bb0b3c06f182a77604252": "7ef2dcc345b80da5cbce205306ba12b3",
".git/objects/32/2b9d08d8d1d6c4bb1bb9596e8c6108423ec67e": "19a8224df29ac548a719856e6c07b620",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/587f019c151f0c8b4d9ea7c1a92a90c228a613": "c48be36cff02941b9871271088f2e004",
".git/objects/0b/994bf6a3e9764f8eea17cd9e5f5d01f617397b": "513aa36bf653e93daefbb46cbac094e6",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/dd64b7fd4992fdd3b31f8f49e706b488878b25": "4c2c8f5db58888ceeba156b19d43ca54",
".git/objects/5a/0ab8bc3669bfb370fe1f1677f10dd928315e52": "79ee9954a8daed9e51de556148756cb0",
".git/objects/33/de4d67a8975181b6f8e032bdf70d1f668218ae": "6b07cb8b047ebc1f6b22ad82f30c11ee",
".git/objects/9d/1f906fd55a474bfb609ded6050bb6d3e8a8485": "d15052516cd3b0c3e0d98e6354d492c4",
".git/objects/02/fb8f86b0014da751aff9730660d8711c704feb": "85309e6395e8423496c29067ecd242c6",
".git/objects/b5/f1d2c67f796d6b64c98d56b9f0855af1049c95": "544d813c691bc626a41650422550ef35",
".git/objects/b2/40a480cc957cad84c0d17cfa2f3af8396b304c": "045231d162822da4796b1062d426b704",
".git/objects/b2/ce9fbbae1687c302395851abaca16b3cf31ac7": "683aee4764f1e6797018f8f37d33844a",
".git/objects/bb/f6b4e159f8679c49f52894ec25e76e467e55d7": "8e53b52833426deacb567ab24b867d18",
".git/objects/b3/ed4ca7fe0e4a24d0b629b05c196620a02a75e5": "e0d64f9451560cc2e9ac2bb50c1a5040",
".git/objects/da/a10cf82c3f2a5cc94f04ed8aaed9c38ea3bd60": "5ba8bb0313e8683e5b126847aae82b53",
".git/objects/a5/ea6c5389d3998139a80e00f01ff0c14de7e727": "afce4f8db228a8240ed339005e31be9a",
".git/objects/d1/bcc6bb683eb77b844fecc8c523cf21c5f13dcb": "4c93d7cdce062703b9a9f3087d8aa8f5",
".git/objects/ae/0247bf5226d74170fdddd10ec1c013a5656314": "c5f6c3b1e0232757c39b1b06e63b5747",
".git/objects/ab/31b8c4e4db71b2ea20a6b795a9e375c9f4ea2c": "b0342c8cb8f39ce3235fc2a60382c29f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/8e6402c9ed0ecd876fa9cb6fbfdfc11070be17": "48b46dc09c4848e554e4e1b3f4196c2b",
".git/objects/c9/8c83597d0912ed2271d3e2ca315497aed07d1b": "4ddb133687268cd9c9965b47551853b3",
".git/objects/c9/4197f9f4fe727ded1ef2917a8a49d28b109113": "2f41e54698b722a9412dc40713dd8bcf",
".git/objects/cf/bd19a4d2869bace2260021bbe318b823a7785a": "afa40c3a917e5738728ae0b6d8468c5f",
".git/objects/e4/bbc881196a7c9263f9ccf05d94cb8eda466678": "6e574af41d5741cc05c04e88fd74f543",
".git/objects/fe/e2bbbaf79bc04a2a5abeb851909b18c72ab424": "e091560a1f74de2a8a85ad61b5b96ac5",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/c6/55b43848a52c694c0585698cbdd16ed3353038": "b6d65349aa1592cd5336eb1e748d6e9f",
".git/objects/c6/100c54b4cda8dd9c767778f24f1a6efc9f7c3b": "7d1b24b01e363327b32307c8e4bce0ff",
".git/objects/4e/8b9d2582e5fa720067a2044ef7f86abd90a033": "329b651a464424f49c20097f90f1f342",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/343fdec40bebfd5c7f2296de5e7c024c6a5ca7": "68c6542682f685c61a29909fbb9e19fc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/89/039b85baef572a38add26e5b899ccf3a706efe": "6a0ab275b7ce5da1bf400341aa38e8ad",
".git/objects/89/a82ba97a4c212392ae7cf85a1ec4c71c6e6093": "e0c67a25f97ddc3a0be755fe69390635",
".git/objects/1f/cf65351da5359928cc740d809a2c253c470ee2": "7fd127fa2dc80c6725386860f8aa4b01",
".git/objects/87/b3457053400b9d25097ea8e6ad30f9a0a0a806": "fd4d484364cdad1f13f3c455dbb4bfb2",
".git/objects/1a/284186b1e6370e293d0163a9db6c390bedb04f": "6ca433be60207a796672242b9f8e77ea",
".git/objects/28/3a3a1c90d0e95cb7bbbf5577eb6d30a854960b": "24ad0cb0f175a23baa3cff08f4c3ad90",
".git/objects/17/4c7efe95be25f4b41afee4fe3adc04c12a2392": "c215deae99e67203aa940a4d56f6a5a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6f6f588ef304c9cb9b4318d1f3ade30916dab9": "aebb946220e42e594dea2a1bce4d0eb9",
".git/objects/26/718e0f5fa409f22f669cbcbec439d2e8171408": "ec1511db5df66b7c67c2c7c49988e0a1",
".git/objects/21/ba59467ffc1db72c181f679f006d0cf329fb9b": "3896378ad2eab6ffda054f5e7577bff6",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/2a/8a90701bb97fe7a700c22e6cf28467d4182c23": "e35f3eb7b485765f0cbb91c6d4c3c32b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/161b350aff2910a5d1b03832dc1d44cf8a25c5": "8fb753fb13b0a49958102703bf76f54f",
".git/objects/9f/6fe7db05c855ee7216c794c0e20cfc17c25d18": "447a7b3921d2b75e274e1975e6ff880c",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/9a/b975662dc48dea040691f0cb43f5480395171e": "a45c48bb8971b74b8d1684c5f85c93e4",
".git/objects/36/537d2f4fb7a8c0dac685669a6ba3b4efcd9b5b": "a553e22db5dde61e3d8d8bf9a5f743a1",
".git/objects/36/a188f5be56520caa0466f434372f43e4d8b3ff": "5bc864ef3d3c87662be042bf7b352b67",
".git/objects/91/fa7280a79bdfe189b36425e2d45443167a7d74": "e63f45ebc009ec47b15dc3112cce3654",
".git/objects/62/829270b86f1eac63d389bdca69e493a3b96d0c": "848eafe9a833f045966d64f949d06e82",
".git/objects/3a/92bddb72fd1582d3ba17ec0d6842f9a3eb6752": "a9a4979deede57d1a1fc8a9348b0a8e0",
".git/objects/3f/a4ebc68e61f3452ac59cf33d6e61205f55ddf0": "ab171b63af0b6532db91b8e7287d6de9",
".git/objects/30/ec14c253deb6884bae5b7760bdf9fb02d62aa7": "fdae4ea8fa83e3c53d5bb3704d404710",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/37/da5231e7500aaca8ca06b85a488192d3099e7a": "70992ae5813e9e79fbb4779d5e06401a",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/cbb1c2284ccf597bbe8302bc2343c28e7a496d": "e8be7f586d7c408b3a8b405beab9d8c4",
".git/objects/6d/bff324a217965acabfba52694eab47f5eaa360": "27338b136ad697bbcc0202a127746cd6",
".git/objects/01/f289d4636fa3138f474fe2469d8bfd37705bbe": "77c6992eadb65cd10373df4697d11173",
".git/objects/99/c7701374c6799f6de7fb953988d35047edcc03": "1aef9591ce0601481854d2150ad306d3",
".git/objects/0f/8617d5736df28e6402db60d540e19186bcf8e0": "21a0d17c21587a2aa051b307c5dac61f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/1bf4b8a8164b94555440bcfa15620765788794": "34cbac6a0f418346e1adcf23a06a00e0",
".git/objects/d3/d5fa6e3fab52fd34bde93af1f1d839a30a7e6a": "2804f8b92867fc6a0e8a7c22fddd0e65",
".git/objects/d3/224331201c4c0098e7a8b6408f336194291e40": "a9af8d1a930341154dc29762bf2658c9",
".git/objects/d4/49700c100efdb6c0cda0a2519177e8562c42bc": "39c05baaddf5837fb4a5b9fab1ce9436",
".git/objects/ba/88dc6306ea855bc57d1ed8ce9d4ad0fd6eaac9": "70942baf89c3d3443d97f450c8080a7e",
".git/objects/a0/499d472fb69885dc878a007c0d9afb2018351c": "8ee8c3ae8c4cc11f3caf0f6179e17503",
".git/objects/a7/8f5c88d262a7af7a23b58da3001d8b629024b2": "0e2f351ec671af9fd2f9976bd0f5e97d",
".git/objects/b8/e4819971cfad92ce68ff677429f594f75c29b7": "a5f5ce3e11546ec8816f81f0b199a116",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/dc/e3198d095dbc2f768cf7b486f68dd7ca67cb0e": "89065b59e66a336c724c3fb09aa4efb6",
".git/objects/a9/2a06f487f9ecc02c22d67b548b235e351af70e": "a9dc2e9bf8a0f86e379863cfc05d15e3",
".git/objects/af/d621b9128c095d155028a538c142cc686c2019": "eba3f12a8f4e46ec117f983e57336834",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8db9d9d27290fc139af80ade8acfa162a76b1a": "f16fb60eb92664d5ebb0ebe20c037afc",
".git/objects/c4/846a14c4422690a5d0d2248af85dd783dd1221": "8f5e9869d5572a69f4242355c166346e",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e6/c3a4129b57957d607ca06e23342fe1e5af703f": "b620131aa690cb93a73d4adfaf58f62b",
".git/objects/e8/f74f979e342e416180415215bc4d7011d581f8": "447db5c617255251a7ce13d6587f6d93",
".git/objects/ff/ed9c89f32901adda5fc650ed5e8e7794cf7d5d": "0e06be472c9c0e5b5da245e05f1efb49",
".git/objects/e9/a179cfdd153c813713f15c078ca8159af2acab": "897a4a5d744bee48d1087e4df3359a2f",
".git/objects/46/c7f7949bec74f85cf975afaed594d6b9f798b5": "65e370d5f56acaa48f69d075ceef5432",
".git/objects/2c/bac3f5e2a1bb5315c3e0ebbad42a20fb5b36be": "cb772148617dcc55d13dde6b1e54886b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/9882b9d776d5c7f213364f7e346e08ff09ea3b": "542729da1c2d057b4d5bc0a2f594f75f",
".git/objects/77/657d922713eff563a272f67f07db66c4bf1704": "abe9a6520a5886dc0ea73801a8ef1efb",
".git/objects/1e/3b712f63ae0b3a8aa3476c9a9644b6a408d348": "bf4c8c04bd27cb72a5c67699d94ef847",
".git/objects/24/4fdf40ef313e6bc913916e618ffa7eabd28af4": "1a71f88edce5205937910a35c0d470a7",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/39920e428cc5e9ce5e24e05f522fdaf18b2733": "5e20326b3648235944e452f423f3aed0",
".git/objects/76/8634aa882d75e0335d332ddd38936027f8e6dd": "10532cce5e054bcbd98a9132b3cf995d",
".git/objects/76/e5caaddcf112792d01bc1145948e62cc21a6cd": "b78f4ecc1ad54f8b3b7d3aaff5ee131e",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/2b/4570f3e47a6ca7c8011c40cc866baac3572587": "cd4f21ce7972f964f1628003af6392fc",
".git/objects/2b/71c1fd94eae5e0fe4384cf364b38e8e14ea064": "e413ff8735a67c4b78a4733450181847",
".git/objects/78/8e830d40d090f3855ea8781f41680c257df3f0": "a0aa8e6f844c1ba120ff1b7d0bdbf4da",
".git/objects/7f/4ffa77178daef8c54953554f6dc07c20cc708b": "fd7098b9bb9785ea2035e12fe5bbd54e",
".git/objects/8e/fcf816d1970369a10698ad61d64efd06549d87": "0e3f1feb16a83255444cd17e0124a42c",
".git/objects/22/e2987c51489fafeb594313ce3dba4ad274b924": "a15d85e699575eec7aa6b7a564a415f7",
".git/objects/25/bd58afd30ab344af4c432894635384bf36880d": "bdefedd43d6bb18bb2d9c0ad16338673",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab97cba3aa46550af8cea6b4afd7e4a5",
".git/logs/refs/heads/master": "ab97cba3aa46550af8cea6b4afd7e4a5",
".git/logs/refs/remotes/origin/HEAD": "0bb02f00668a4b2b5d407a2d9a250383",
".git/logs/refs/remotes/origin/master": "7e2eec6672422690587a4c101f5b9d2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "358e33c3e896bbcb2fbca1416c626b8b",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "358e33c3e896bbcb2fbca1416c626b8b",
".git/index": "08cdcd2697e9d9cb5641767441551adf",
".git/packed-refs": "3bf1a81ce67bfd18de6faa4971192c4d",
".git/COMMIT_EDITMSG": "d3971bc28c9ac7f4c8e077fd6c446ee9",
".git/FETCH_HEAD": "a1b49e2cd6084d362fd3bc1db0e8f20b",
"assets/AssetManifest.json": "9f9d6a283deb52d1f2fdf961c0a0b2b4",
"assets/NOTICES": "4d63ffc5eefe7159fb212bdb878f5ab2",
"assets/FontManifest.json": "e514cd989254ec4e89866947ded41367",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/menu_icon.png": "87375b451f15be8a243714374f678022",
"assets/assets/images/battery_medium.png": "923618be29882a1914601b9ffc093cb9",
"assets/assets/images/ds_logo.png": "dfd6211b4a6c98737223ca8e32c1e3c4",
"assets/assets/images/ds_logo_tr.png": "254baf1823220a0b2d2c77230b40bc3e",
"assets/assets/images/background.png": "530d596888843e7accf989f72b127942",
"assets/assets/images/pentagon.png": "4d56f188810818719e0ba20bf15a85b8",
"assets/assets/images/battery_low.png": "5e35260c95427e474351361d1c7559c2",
"assets/assets/images/battery_high.png": "128fa43e9a0a6b3278742f8d3fb1eb77",
"assets/assets/images/battery_full.png": "b8056fb585534c9408b4e79135bb1d6f",
"assets/assets/images/error.png": "815111fb503a105d2ebabda7fa14f8bb",
"assets/assets/images/battery_empty.png": "cdc013b3ad4dfee79f170935e9677753",
"assets/assets/images/account_icon.png": "caab483acc9db7aa918b603f9588e2ed",
"assets/assets/images/battery_charging.png": "e6c0f2bb39ad481f8424799868abec69",
"assets/assets/images/pentagon_1.png": "09773ea8759f09e3f271aa96bfe83179",
"assets/assets/images/marker.png": "a30f29ac20ba098f4d4be111da61bc05",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
