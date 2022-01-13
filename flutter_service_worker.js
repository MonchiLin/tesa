'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "102f5037fe6474019fe947b4977bb2a5",
".git/config": "923da7230484dc03ea1eaa9b9e66035b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e1a8e4d8e7b9af582ae20a9c48d60d26",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "acf99adcb883558d3d2988bb6eacb821",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a392ce2ba962e6ac15103949e3f21cce",
".git/logs/refs/heads/main": "02c8be7f069ee861024d4910cf28b222",
".git/logs/refs/remotes/origin/main": "8789a65f9f9757611bda8d299e3a9181",
".git/objects/00/befb0fd1159efdd61d83a502f23ce4a290d5c8": "baa1f4c085023fc84474165d8f5c7f69",
".git/objects/03/91d907af7810a07c1d056064b3552f0b0e1abe": "7a6a034b4fa1f350919f5383679656fe",
".git/objects/09/5bd3b0e0d177988cf704e11e548f576f3fffd8": "3a77e5aa51b2548e05a56a2a2cd72cab",
".git/objects/09/addec848a8943587cb1bd1cc2966077ae00f13": "fb6f5c09c15199b6842b854cedb22593",
".git/objects/0b/e5019949a86a704e1ac52a74214c1ecd3a7a9d": "62530216e5cef74853cd0b7815deb73a",
".git/objects/0c/0524f4caed90228cc914834d1364b6e020d16a": "451bcb3770e5693412814274dc6bd75c",
".git/objects/0e/1af2569aff3a18870a7bc44266b457b8d5d2da": "07bdff133f852628d445ae5e6d849f7f",
".git/objects/0e/7c1ba5acc15178278d100f1c0840c579305107": "395c7dd3c3912f3139522e9575359835",
".git/objects/0f/f78602ab5f4a24ea5c433a98b685baba2e34d5": "0984624a2c0dea9b2b0a8fb788ec0a82",
".git/objects/12/19e9101418353bf12835c142823b4548a75b44": "4edca6267584eaa1b78ec6d247c1f55b",
".git/objects/15/e70da55734b82dc60fb45a3b9b3078e8e0f946": "4c8a811ea3e3aacc920e2a400db810f9",
".git/objects/17/1fae535de9c76a80f1ff40e26978190017012d": "810b8171bb6256c23d1effec565c2c33",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/c63c13453854b330cff808ea29a897b58a09ce": "cef9cf5eef39ce3b8a66d9e15cb2d61c",
".git/objects/1e/5e7f21876bcad53c2fb8c4e2ac9500e71d420a": "fea56f68368b362d85cf201a5804af89",
".git/objects/1f/bce80375618748b288285fc563689494e81558": "1749d9661e938fa61848e7989d217a3f",
".git/objects/24/7a5f490d4d05257d918039e327f675d9a747c6": "2c33326675e7199841929dace6ffe9de",
".git/objects/24/b5ea56745b6b05e2913b479691f7cdb9b577ab": "041699156e09f599039e46c7813e6c12",
".git/objects/28/6cb88d86991832e54158da927cdf68977853ab": "0e556b5055204b42dc93ae7825659fb6",
".git/objects/28/b002a6626fac4c60b00e8ad9c89f0a156ca9d6": "68dd7e2df173c5b42a5b25c943cd1852",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/29/06610effc13cee5f7edf943bb99ee90d0e88ed": "7cc32672eb3b16fbb3b5d2cef641431e",
".git/objects/2c/7ef9c546d38ee7aeb2fd0bca933bc46f7a5f0d": "054e29d3327773ab0590843fb265a797",
".git/objects/2e/3b9ad26336480c67b24f677499dc749adb1134": "bab3e458a454df74fa7c2bd3736ae3ae",
".git/objects/2f/33f269f2a22563bf61905022b96050dd364621": "75e9c560a558bf24f4b07ee68a43a7bb",
".git/objects/2f/964948069b6e1e412e9d3155b23b4e3e1ea4b4": "e7185a6a3ab956bbd8cf86988fb13f71",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/c75f8feac8fdfb3027549f37532faa5fa5a308": "0820b73fc7d935483dcd88315ee0cdd0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/36/92e355e9d675afe336594c4e2ed596f4e75116": "e5b7fad8b543d1e6ff948965e2a063f3",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/44/c4a8f9a1ec681327c80ec4d1eb512d0c9dcbce": "48f19d2b6514fa680691ae58e12953b8",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/47/55e043fa517a5cec1aa47b75557f68bc68541c": "8e9bce9191840347149c3d96b7a00f7d",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/afb60c69b457133dc9431a42ca55053106e5c2": "ddee1ea84f3b44c282a731555ab4b71c",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/53/2e463c86c031f5e8bd37dbba2915fd55563303": "43e3b9cd9a63ab067926f019e14a4543",
".git/objects/56/2b2c8da4d457688226363b31a51e85690cbbf8": "bba2cf3fe704c74ff556bd5bd540bc0e",
".git/objects/5a/4d01b328d221f9cf7096a54bbd8ce5b9c13da6": "970eb9265ef060a7f5e56f92a6861958",
".git/objects/5b/28a63aad41dce833cda24f6ad808371db04fab": "51b26cfa0d09adbfc60acec21897ecd2",
".git/objects/60/9261c832046e5e5d090d4b6b43956bb27c80f0": "00495e478d7d563e4da40b79749efce3",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/ad611191918e8cbb3273a30c5824b36ac1aee1": "e0ed9836a8ad5bfc82e6c4ccf74099f1",
".git/objects/63/1101589ca4f6babca824df435f11744269724a": "4fe4322c799b338036a7e2daa0b6df5d",
".git/objects/63/4b1a1095a08afb5e3bc0ff85b82256b5241eef": "c032fae80b8a6355c2df066920b916aa",
".git/objects/66/b4e0e455b01df8437acbee7de65a634e3919e9": "0400c62e909a63f1dbe9485767fe4504",
".git/objects/67/2a57760a5160330714fed8746d4cea663b5142": "3a2d77f3ac01f7d0bfdd047c678bc820",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6b/d2377b3a39c4f607be5fd99c2d9d1910af8f84": "e1844694439c7c28698654883e3de856",
".git/objects/70/b919cbc034c2bd4b10748b2b7d928da3dbdf39": "af0e32f26bce5c28e833a89684f6463b",
".git/objects/72/5b599f32e2bc86949d88a6e85116811773714e": "1db6816a3e39c69366561bcf0be66de7",
".git/objects/72/ab3eebf1615a7cd4b7f4dd649d9691178b27d5": "9609923f891ac517869a8bff3faa05d6",
".git/objects/75/b00a192e03aa0b07c31041262e3460ea5065e4": "31456ab6109bd4a41a6a584a8e39246e",
".git/objects/76/6e1a9cc53ffd6947fc2144e5b94006fbe14cec": "74185199a24657ed2116db3e4097a28d",
".git/objects/76/6e53ae7fe1e6f8241f7d56cb0534b3bd3253fc": "ce30e273682cd90aecb55765c271b1ff",
".git/objects/77/b99f18d3984706eea5a252cf2563132283567e": "d57b9c5829f10989ecd01a11e83bcd9c",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/a4773b8c1570762a6068255aa1a1c992bcfe36": "235e5203e883f81c95498701f6725506",
".git/objects/7b/b65c86de0607ef3597ae70e18543a6f3887373": "6dc11e61885f6d25e926a4aee3a8236e",
".git/objects/7d/354e5c2a64469e75c0c74b7d7db1322acb818a": "bda9bfa9e8f0a271bbada16f5749a90d",
".git/objects/7f/3ac03adeb22c1a1ffdb55fcb53608f6a0396f2": "d26a29193441ef8f15f5600904b31aa7",
".git/objects/80/2f59a085fbdb889f4ecfb25b62835a4360bbf8": "2eb06ff6c775b67b4617bdb8ca0dae76",
".git/objects/83/7c1f4bb2d8ac27898a1956d64b239bac1d7861": "947f314de55b15a394225d43767469b5",
".git/objects/84/8b31e090825b575e102a050fcf23bab86a1b8f": "235c4177b391c72a24bd094f0e6556c4",
".git/objects/86/b28d0aaf2a2b995878d869277851df4ce9de93": "7f867999204ac07298c0041184356d08",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2ae9ef1dc9041fef71f10d289768ad5cf8654b": "303cf3c6b71fe3f444bd7446bf36fa04",
".git/objects/89/dbe41a0ef3761e031c917bc6724220844c824a": "790f31ccb86c1f6d18f7cd02537d454e",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f4d45d6ed0a1d3796ca62a6a386142757ee9f5": "dd4f70a7f2c82b54a13c81c6633afe08",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/92/85c50dc7d53cc0279e8efa5e1d25771dd68e21": "362ca92a66f2aba353c66f8a9cbaf6c6",
".git/objects/95/eab6151eb9087c46f929b08a3b50c5b5d81509": "faf21bfabf7f464d3c46739cd13b2117",
".git/objects/96/cfe13e6eaf120b5df977895448bd1043b00cb4": "03feb281c3d8d128c319500889e10397",
".git/objects/98/201db5065a2c926cbf891cb5898d155ca2564d": "7270f98cbe30c4d8aa953b829d01a17b",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/9e/8749ac11b4ce99a1ba23da123e9c2e89d4d7aa": "d9e62625b3848ca1dabba38a7ba013d0",
".git/objects/a0/646561f4bd2f3f2c7427603a96400442c5a175": "f69e6a123418a49a3a4747751db50a7e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e65e246325c306236a38f0f40a9c9fbc6fecde": "1e51abc7aa92ef778395aa726327fb55",
".git/objects/a6/f946c9ed65e8741ba23d29e290f6b94e3f678f": "4ae7cc8fac0f0b1e325ef7ead0204f64",
".git/objects/a8/1c6d6b867cb3d99b3713b0f5a719fb86e8b3ec": "e42c086b1044255982f55e9e887353e7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/ac32decf3589871520768edbecbccbf5146490": "8c4d73ef4b1d146428d46643c672a326",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/b4b72eadd1e6fcd5ed2d68eaca7cc4e301f596": "7b0464ad430e1890a286a857300d92a2",
".git/objects/aa/c9b1e79a02feb562292858f96425b5a50a9050": "3011cf097163291c1ed5ff6874f87edd",
".git/objects/ab/7fb45b69b06f55a8cd0fa0d58abf32220da04d": "34b79fb20056bab288112be82aa5721e",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/77f699eb8928bb3589ec69c2393918b70020e0": "b77a034a9ba6ae03348ba85a90f5ec5d",
".git/objects/b1/92c41596fb671d6d593da9d1bd08915502cc1f": "590a4f67fbb5adda6fcba1413cce7a2a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6c67a398090fdcca3576c76793f4d29bf28a02": "c71bf9a76b1df4000e62f6d61b7ddf0f",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/c1/11c494ecb5653064d57b7f1262d7cb908b0cd9": "b8367d1bf98838364a71ab709f1a3a2c",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/c8761397fb7dd90850f17c8545e73f06e63961": "b7d9766088c5c87eb5e4590a20e1fdf9",
".git/objects/c2/44b1f0873f7c2c1608d1732f6a3316496f0a07": "a874e2c17a24af4f05b83c055a40cd09",
".git/objects/c3/bb0235d7052cc40a21eb71a20c60355b3ef0f4": "0ef8f13692f6388c9d7127f93e81f57e",
".git/objects/c5/8ccdfd4aa6f14f7919b20408e73ab423cd7b47": "9c9424aa66068f1128085adda88d8d32",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/465cb2ed0d2335ab818532b488b3cc9d989a06": "4bea571152ea88ff53c416368a71e8bb",
".git/objects/cc/e2aa4b709506249987d621bb242509652b411e": "3118254a24b7461139027f9d8f6eb183",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/4584b2ccd95033fc4620101c956a4ad9d3b9c7": "1974e55394901edd6ffa98710ef5187c",
".git/objects/d0/edb2cba562114d46348a3894f519e2f307038d": "10abeb9b0cfc44edfc26400f94f7fbb0",
".git/objects/d1/040e247fed92b5e3e59763728e6b2949fadeea": "7fb668a5d381a362a7aff87385cd2039",
".git/objects/d3/10fa5155bedc6203f90ea26e28c8ac4a5d3d64": "833bad0410edcc4ca44794ce79972d32",
".git/objects/d3/d2ad126b3d6676bc19f7084112a3e1c9320f02": "ada1291f068c0a30d05efd319086f5cc",
".git/objects/d3/fcac37163d4036aab940f7a556b311c950cabe": "2481e291ed87723ef85abce86c2188e5",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d8/306442ac42fc7421b5eb6d65f4ad9da9947366": "8463f146ce4340eacd89331d6e929182",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/860d3aadbe168ba6aaa41ea1615958881849ec": "9b6514b02ea5714c05a5556996b67ee6",
".git/objects/db/fefe6e641720d375b7e4b948b639183c87794f": "c0c93f3316ba2826999f69ff91fe27ae",
".git/objects/dc/1e30a86be13958d068a892eb2e989b064fbc16": "8f4a22ace1cb825644f12beaba19228f",
".git/objects/dd/83f4e21825b4d1cbb9533f7c291acce3d57ffe": "c84e5a614d1458d4e1711f74b5cca53a",
".git/objects/e0/271f4902c97f7a839c92f1fedd53c4579efbfd": "62369c54816831352e437566fe54f6b4",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d7f741f9517a3bf93ff2b86e32d26e2b613219": "b7e70288d599edcd2d820facd086c2f8",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/66addfc1c65a5955a8f3562e8f5b168c30da2f": "3e48e6767972754deb73fefe9b1faf75",
".git/objects/ec/d028e868bf4cd0b7925b96a69f999be2d77772": "1d4a5dd5ae2cb753a6242b1994330ae0",
".git/objects/ee/32e3dbd2aae75005ddc1421ac3aa59de3b0755": "00a4f590c886f11d3beb69cebfa9f208",
".git/objects/ef/b98179c2e10f43b6067df0db8390c728cc1e32": "e04b6c7cca3b667fc6700a7849c06c36",
".git/objects/f3/eee0b13c5863e80684af1737be5c37610557e1": "eb7cf4d9a297b5bd750114c6d1fd1bf6",
".git/objects/f4/d7b3b2af0142a077a1e37ee920e0787280b71b": "e63a9e336edcc3987c80531c64d7ac53",
".git/objects/f5/4fb605b152dac2e3982b95f53c8765e968ed60": "318e1abdf15f5e388242d5527105cc9f",
".git/objects/f6/280aa9a918a7fa753cd381c32807ea11a3a53f": "cf3073c52586072a54744d672e65a2ad",
".git/objects/fa/20f24b8a24abedbf31b96c1934e97d66b1d465": "e64006d2f65b582c12d9bfe2f5b1088f",
".git/objects/fc/18df20462028591835b29227db6a7f1323552c": "44f7d9ac7885444b2e572e8dbf2d1c55",
".git/objects/fc/3bfe3f3cb54f7c0342787821980116437db79f": "1441b9d3d671baa160567dab20c7963a",
".git/objects/pack/pack-d2a2e2d23dbbb1cbe6b87a1fe0d2b76d9128b2a6.idx": "c6d84641c0b248416f9bda41a514d63e",
".git/objects/pack/pack-d2a2e2d23dbbb1cbe6b87a1fe0d2b76d9128b2a6.pack": "c0cbe25455a92667ccf8863a3235736f",
".git/refs/heads/main": "e86bb91c5948aa5d8d3744ae76c8f361",
".git/refs/remotes/origin/main": "e86bb91c5948aa5d8d3744ae76c8f361",
".idea/misc.xml": "e508eac0ac7c502b1efd7eef0251d997",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/runConfigurations.xml": "2fc3380134e865b7a5b714aad6fe21e5",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "9c283ba783f2572174e1a88c94bf19b3",
"assets/AssetManifest.json": "f84a2a6c6bf9a72fa1ad8fc43b715fa9",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "01ea0bfe1053de98088aeed17f9ccf2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/resources/images/back_icon.png": "5b9f2e6dfda4423492283b71d7d931b0",
"assets/resources/images/bill.png": "06e075eff6fc86edd0ff9e834a2d0d79",
"assets/resources/images/chevron-right.png": "52b25482382c726216ad5af1da15c97d",
"assets/resources/images/icon.png": "90ef892c3022685dcb06fd373b77b6ea",
"assets/resources/images/ic_arrow_back-black.png": "1c7f4c0ce104374036a200f54eb7f841",
"assets/resources/images/ic_arrow_down.png": "f8aa18140ab88758029f2faee9a8de42",
"assets/resources/images/ic_arrow_up.png": "a965f3eef111c0c81e71fa6e57fa887b",
"assets/resources/images/ic_card.png": "18c4fa007fb5c581c9f06c67e24b4a8f",
"assets/resources/images/ic_copy.png": "f9432fc68acff22c3063332da68b1e76",
"assets/resources/images/ic_danger_triangle.png": "5a8ea2e81dfcf98b1947aee9b98a0070",
"assets/resources/images/ic_delete.png": "8ca6349cb0387fe72ee831f8e8e842d8",
"assets/resources/images/ic_dollar.png": "a00af5d07fa89cc39bafbd601d8e53a2",
"assets/resources/images/ic_idea.png": "9e2160cd0ea7e3878127504ae8d4c105",
"assets/resources/images/ic_increase.png": "16c2493aa55f2b0eeb685775a73a4fd2",
"assets/resources/images/ic_lock.png": "2c9473c964522f9e1900f285e4d393e7",
"assets/resources/images/ic_mailbox.png": "d0c711eecd77fe4c2b98b718787afcca",
"assets/resources/images/ic_menu.png": "308edbaa2bc4eb619580238121a2df0f",
"assets/resources/images/ic_search.png": "9917d2620a9ff4d5727ad56713600694",
"assets/resources/images/ic_service.png": "50f8a9a8727aef220b1ef265a90d1ebe",
"assets/resources/images/ic_star.png": "8b9e8aa40696914d5fee4e62715450af",
"assets/resources/images/ic_star_fill.png": "0f5cbbd2d7fd5de77c9672b883b9731d",
"assets/resources/images/ic_verified.png": "ec23c846204363cbc5627cac74a9010f",
"assets/resources/images/language.png": "7c7ab34a35c727ddd02fba06cb89ff77",
"assets/resources/images/login_bg.png": "a71ca80324224c0e1df7f60f7b503d22",
"assets/resources/images/markets-banner-example.png": "a6fa88bf4fe724fae53473a7945b1987",
"assets/resources/images/markets-user-icon.png": "c7dc84242cb1897ec30ab64f36b90105",
"assets/resources/images/markets_coin_example.png": "d2a054cd9e4cf564107d815d8bde9f77",
"assets/resources/images/markets_deposit.png": "a00af5d07fa89cc39bafbd601d8e53a2",
"assets/resources/images/markets_mine.png": "8a02a93941c8bf49ba0228856563d9c1",
"assets/resources/images/markets_subscription.png": "a2385143d215698e78f518f4c422f4a0",
"assets/resources/images/markets_volume.png": "639b5bebb826a579903882f9aed9c74c",
"assets/resources/images/markets_withdraw.png": "a8290c900d32d5c3520950139acb305d",
"assets/resources/images/message_notification.png": "6069e5a5f174fbab508569becec670ef",
"assets/resources/images/mine_details_card1_bg.png": "c2ec56eb693506ddf4c733d35b82e297",
"assets/resources/images/no_data.png": "c8bf11275c35dfa9bfa81c3bbcb04d21",
"assets/resources/images/security_ceter.png": "6e0e266533a8eb3de8bd877d71913d8c",
"assets/resources/images/subscription_header_bg.png": "d1f195ce9258d0901350ca8d69bf3663",
"assets/resources/images/tab/assets.png": "c210940a26ad2ca62af00e49d282c09c",
"assets/resources/images/tab/assets_active.png": "91cbbf549753bd11e169468a218c4761",
"assets/resources/images/tab/markets.png": "5d679abd35fc7dee9ba205e3f4e7f21d",
"assets/resources/images/tab/markets_active.png": "5d974ca07856d9269746672c0da844c5",
"assets/resources/images/tab/mine.png": "714914e8bb7970ac2ed9342b883d941a",
"assets/resources/images/tab/mine_active.png": "6988a5482d090c091d47e2c814153500",
"assets/resources/images/tab/subscription.png": "a1d5de41b91b6038529c9e684bab0e55",
"assets/resources/images/tab/subscription_active.png": "e104e9ffbb0a04754f4d7afdd6b7e8c4",
"assets/resources/images/tab/trade.png": "b2b954ad4e7ddf72ad1c953365cfb8a9",
"assets/resources/images/tab/trade_active.png": "a191427faa04b299b4bd02473943705d",
"assets/resources/images/uncertification_bg.png": "f2ec8c67fe306bf098e83159f075d418",
"assets/resources/images/verified.png": "4e838edeb0511295edfb9d8efa1aa234",
"assets/resources/images/verified_face.png": "5774484f734eebbf14212947dafd1e89",
"assets/resources/images/verified_front.png": "9bb5ab5619d7254789a771d95cad6698",
"assets/resources/images/wave.png": "f8d760914908c7aeca096f00be54b8b8",
"assets/resources/images/withdraw_address.png": "aca5a0299f9bcb508339b1e73b8eab32",
"assets/resources/langs/ar-AE.json": "703c46d0d4a205f73a1b7faa77c47226",
"assets/resources/langs/de-DE.json": "a37ca9546889996b1408156229f0e580",
"assets/resources/langs/en-US.json": "d010732cfa8c2b5defaa2415a3aae8d2",
"assets/resources/langs/es-ES.json": "2e9660f57d5e78947237ef0965c87a6d",
"assets/resources/langs/fr-FR.json": "a469fb5249bfe50cf5addaa1df8dab17",
"assets/resources/langs/pt-PT.json": "c09d04e3e7a015a31ce9cbb5cd09387f",
"assets/resources/langs/ru-RU.json": "4b166f098a5115f6fe71557ec002756d",
"assets/resources/langs/tr-TR.json": "4e026e6b6a86760cd75d1e2fc3ea0e35",
"assets/resources/langs/zh-TW.json": "5c9965e0875436ffe85605ff941eb2a6",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5ed696dfb92c29bcec8d9ddd95835e4",
"/": "f5ed696dfb92c29bcec8d9ddd95835e4",
"main.dart.js": "33c7311713c2fd03be64c57b4793d8b1",
"manifest.json": "1e55c15a7b7f2adfebe56bae90921934",
"version.json": "224f46cb230e655ae015581ade32ac2a"
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
