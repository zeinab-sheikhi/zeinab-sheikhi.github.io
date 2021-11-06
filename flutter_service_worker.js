'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fd6f029b97acc597221ff097ffa9da59",
"assets/assets/certificates/citydi-biz-chain.pem": "4d608115f3ccc5de5669dde03cf9a388",
"assets/assets/images/arrow.png": "7e5e81eba096b5bf82ac7ac100d49832",
"assets/assets/images/backTem.png": "d9fad17155eb30bf32dc4f9688086115",
"assets/assets/images/balance.png": "121662255bc5e054c74dac8983fe6087",
"assets/assets/images/bank_card/ansar_card.png": "e296f675a5937b99a43615c96b033d7a",
"assets/assets/images/bank_card/ayande_card.png": "cd7ffbb94b3a6ca13294232dccfc4271",
"assets/assets/images/bank_card/day_card.png": "b164f683c7e3dc5ec66487d15aed6a9e",
"assets/assets/images/bank_card/eghtesadNovin_card.png": "9b3362d5f22eddcac6acdb808dd13d99",
"assets/assets/images/bank_card/ghardeshgari_card.png": "57189f5e5819ab4e3c0a245bc1547754",
"assets/assets/images/bank_card/hekmatIranian_card.png": "15959a9f6eacdeec9ada6d444e205778",
"assets/assets/images/bank_card/iranvenezuela_card.png": "27b0b6cf490a633633d30b033ac68895",
"assets/assets/images/bank_card/iranzamin_card.png": "756dcdc61a6550a291c7ff3e9517187d",
"assets/assets/images/bank_card/karafarin_card.png": "c0f4bbcdd56c33f870cb44d3827ec51f",
"assets/assets/images/bank_card/keshavarzi_card.png": "4ccb0d2501e00fe1173af0342ad5c206",
"assets/assets/images/bank_card/khavaremiane_card.png": "e75f14bd88663e15cad260cd747c0c5c",
"assets/assets/images/bank_card/maskan_card.png": "2756a5fbc64c9088a5dd49d834490f17",
"assets/assets/images/bank_card/meilli_card.png": "a12c282e16f3f0044a4ad08103bd0ca3",
"assets/assets/images/bank_card/melat_card.png": "141af07e17832da7507816bdf0b61ca6",
"assets/assets/images/bank_card/parsian_card.png": "dfc96a3a87483ac1f22e9bd516d7c1d4",
"assets/assets/images/bank_card/pasargad_card.png": "6a43e45dc794d94ec20b78093a1a3910",
"assets/assets/images/bank_card/postbank_card.png": "1923230813c8c4336e5bad1d1b8c5e68",
"assets/assets/images/bank_card/refah_card.png": "188418707495ed3715f2d3c614f6e630",
"assets/assets/images/bank_card/saderat_card.png": "037bcd220b6e0763b46a91c7b347dc04",
"assets/assets/images/bank_card/saman_card.png": "35f1ca34c53421143a42956927192fd6",
"assets/assets/images/bank_card/sanatmadan_card.png": "70e65d28d818c736621263b98281162e",
"assets/assets/images/bank_card/sarmaye_card.png": "50e255dd5825c29103d389ee40d8c117",
"assets/assets/images/bank_card/sepah_card.png": "47df16d3c518f7dfa9de94fefba292fd",
"assets/assets/images/bank_card/shahr_card.png": "ba63b6e3c92a3907aa0e521edf850191",
"assets/assets/images/bank_card/sina_card.png": "e1fa96f5f03cdbf543b1544290c27c94",
"assets/assets/images/bank_card/tejarat_card.png": "da9d1bbd97e154433ce862418f706488",
"assets/assets/images/bank_card/tosesaderat_card.png": "d6204a661ad3066de551be3cb1f8ec59",
"assets/assets/images/bank_card/tosetaavon_card.png": "bbbc02bf6fbea3adc85f35892378bc36",
"assets/assets/images/bank_card/unkown_card.png": "5367dc7f5d6c33a12ec83701f7d5bdcb",
"assets/assets/images/bank_icons/ansar.png": "03f36f8619fd33ab1548982d3f53d12e",
"assets/assets/images/bank_icons/ayandeh.png": "89cecf7fbb09255def1ae5d5d1d03e1a",
"assets/assets/images/bank_icons/dey.png": "e9b98ea05bcbc379b84e50022377cead",
"assets/assets/images/bank_icons/eqtesadNovin.png": "c110677852b062b87ef08765101aacd5",
"assets/assets/images/bank_icons/gardeshgari.png": "f851d6e8192a8a1df30c52e1882a7e8b",
"assets/assets/images/bank_icons/hi-300-c.png": "f502213b6e7f2505babba07d5fa5e17e",
"assets/assets/images/bank_icons/iranzamin.png": "c1aa18af8c100210e4dead1890dac63b",
"assets/assets/images/bank_icons/ivbb-300-c.png": "70e1ca81f5dbbc61e059ce4298979d70",
"assets/assets/images/bank_icons/karafarin.png": "87771269bda93deccb6b83d0bf7cbff1",
"assets/assets/images/bank_icons/keshavarzi.png": "145029a50054b76b24618816cf2dd41f",
"assets/assets/images/bank_icons/khavarmiane.png": "6f1f1c05fa0ca70ae2aa14be83d2d617",
"assets/assets/images/bank_icons/maskanbank.png": "80e8385b7d8571355916fa47f60fbfdc",
"assets/assets/images/bank_icons/melatbank.png": "6284c563d5ff75de6fcbb89207494ff2",
"assets/assets/images/bank_icons/melibank.png": "9237b55cd8f09932625443f3dc571b1d",
"assets/assets/images/bank_icons/parsian.png": "5b71e7aef03069eb057f4df3d69fd66c",
"assets/assets/images/bank_icons/pasargad.png": "495e3b14aef4082ba979658fee07b528",
"assets/assets/images/bank_icons/postBank.png": "18d347d2e5a4514e067982fdd2c37c6f",
"assets/assets/images/bank_icons/refah.png": "2cf584c005e95a352085c2fce98b1e76",
"assets/assets/images/bank_icons/saderatbank.png": "903e3aed483fc71010fc6dc7f50e774b",
"assets/assets/images/bank_icons/saman.png": "e182a96fdc65be32977999816135137f",
"assets/assets/images/bank_icons/sanatoMadan.png": "0f77e206173050420752ccdfaa0b2581",
"assets/assets/images/bank_icons/sarmaye.png": "3a41f82e90e2e6fe4ae4baffd7bed090",
"assets/assets/images/bank_icons/sepah.png": "d8a10523a68e2166d82d331ef873724c",
"assets/assets/images/bank_icons/shahrbank.png": "6b215365ad8f331901784671f92b5db7",
"assets/assets/images/bank_icons/sina.png": "c4022a1c05e2fa8e3c26411f7ae791f7",
"assets/assets/images/bank_icons/tejaratbank.png": "d2c024b740db0a3692908c47658e5e5c",
"assets/assets/images/bank_icons/toseSaderat.png": "9acce1399a61ce145399f1e70bf53607",
"assets/assets/images/bank_icons/toseTaavon.png": "ceabb6cc86832ef778c4c98f511aa84e",
"assets/assets/images/bank_icons/unkown.png": "643c231e48a50c5fbd2491c11bd0e620",
"assets/assets/images/bank_icons/unkown1.png": "329f201922ee537af5b4600cb4a3f951",
"assets/assets/images/card_icon.png": "9b82f035292909a6c279c711e1669bb1",
"assets/assets/images/color_icon.png": "a06afd6602e647ef31bfbd3b3cd29fb4",
"assets/assets/images/dashboardIcon.png": "7ab451ca4bffb89850f1653817f2ec97",
"assets/assets/images/edit_Icon.png": "5dc86ee909419d1fab4a694976d7d887",
"assets/assets/images/error.png": "963efdfcb46aaf12bd0a840441e88377",
"assets/assets/images/favorite.png": "231e96500e282ad138bacc906c2d55f9",
"assets/assets/images/gozareshat.png": "36e79813253aba2cd828140f3c014ca3",
"assets/assets/images/green_check.png": "64d70a176bb252ed0e41db51b0229268",
"assets/assets/images/icons/1.png": "08a32363f805bf3ada94a37b90e4c8d1",
"assets/assets/images/icons/16.png": "de88cb4b93725d66af264c971236724e",
"assets/assets/images/icons/18.png": "eb8f5c47b44fbc2ef36c1aed3a2f0b48",
"assets/assets/images/icons/2.png": "0fb6d3ff0bf7d495a481a6b3018402a0",
"assets/assets/images/icons/ach_transfer.png": "bfeeccf2b81e015bae38d98b9c57860b",
"assets/assets/images/icons/billpay.png": "abfde4dec924e6f112242666d291c92d",
"assets/assets/images/icons/bill_pay_dep.png": "c63414a72e28d5b6a12be28b220d915a",
"assets/assets/images/icons/buyWithCard.png": "f4d9e198e283c457326558aee95d8887",
"assets/assets/images/icons/cardBlock.png": "28e5d962341777551b26f89b8d5942f6",
"assets/assets/images/icons/card_selection.png": "759e2db082deb4482ffa9b491c310503",
"assets/assets/images/icons/card_transfer.png": "dd3d949cb73fbce025c34b100527eedf",
"assets/assets/images/icons/card_turnover-1.png": "c9d7d8ff6c8d6d64a979b8eb58e092d1",
"assets/assets/images/icons/card_turnover.png": "416221a001cfc31a9e53d89dcd0db476",
"assets/assets/images/icons/changeCardPass.png": "69f85603d3f3e3bf5096c4ac357d5a1a",
"assets/assets/images/icons/changeDepostiPin.png": "c25dd3a5bf7cf50b9cabd706586dc160",
"assets/assets/images/icons/changeDiposPass.png": "183e95f97d91348a36ea3b15499a0e66",
"assets/assets/images/icons/changeLoginPass.png": "f6d6b24d325223818c8daaf74d5bdf15",
"assets/assets/images/icons/charge.png": "eb1d8e8e53fbb8cc50928eb663f76ba1",
"assets/assets/images/icons/charge_direct.png": "b048aae3a8280202ef6b7f531337159c",
"assets/assets/images/icons/charge_phone.png": "f2970ff228f225172391c9da6ab91001",
"assets/assets/images/icons/charity.png": "e2b88eb8fc9510623e03ce8deffeb3f6",
"assets/assets/images/icons/cheq-bar.png": "b05011b566b198e175d0d588970375da",
"assets/assets/images/icons/cheq-rad.png": "02992e1a208b47e28692d53a59f4044e",
"assets/assets/images/icons/cheq.png": "6ab8ca40c66b5572f3b131e941e3c95c",
"assets/assets/images/icons/cheque_dopsit.png": "0454ff9bbe942c1d5f7c53ac43eda90d",
"assets/assets/images/icons/cheque_list.png": "519c8c867b2d9ea5fd03f86d0e4d87c3",
"assets/assets/images/icons/cheque_sayadi.png": "0e614e50a9682b634238b88544623430",
"assets/assets/images/icons/cheque_service.png": "62917c443dc829a64db2c25834d143cd",
"assets/assets/images/icons/credit_folders.png": "8e41fc4b7e64805b88c076ce0bc21f3f",
"assets/assets/images/icons/deposit_inquery.png": "0b65ffb4ec7739a7fcb699f32a864718",
"assets/assets/images/icons/deposit_selection.png": "3fd6def3f1ab4cd07bfddcfa787aabb0",
"assets/assets/images/icons/deposit_status.png": "e25d1148cbf99cea961e4c9b025e9f0d",
"assets/assets/images/icons/deposit_transfer.png": "6855f8bdfb3491abbeea7d86ea4cf305",
"assets/assets/images/icons/deposit_turnover-1.png": "b1464816ec724cb0107fe9bfe4cb43c3",
"assets/assets/images/icons/deposit_turnover.png": "1a347bc717591f3fd65144d8148d33a4",
"assets/assets/images/icons/digitalBaking.png": "35506f7296123fa0e5bbb19cfc92572a",
"assets/assets/images/icons/driverPay.png": "b09c4d30e36efb54c5a1426b9287f72c",
"assets/assets/images/icons/elam_mojudi.png": "60214e5c91308e04eca90a15d544ed61",
"assets/assets/images/icons/enteghale_vajh.png": "fb8e5cf0107856b64bb7060977144c61",
"assets/assets/images/icons/home.png": "a16f9341d05c14955545b63c1e00857c",
"assets/assets/images/icons/iban_managment.png": "9b61f39df76c42f9a73518baa24e5f57",
"assets/assets/images/icons/illus_change.png": "509614242b012583ea8de7a9cb144897",
"assets/assets/images/icons/increase_wallet.png": "b1715920eed8f7a7e2bb4c3d8dcfd7d9",
"assets/assets/images/icons/inquery.png": "5e3076933a68620ba8233449c4ce4146",
"assets/assets/images/icons/kado.png": "a2951e4da2204626438085a762127b0a",
"assets/assets/images/icons/loan-.png": "d85a1b578b357f05bc06a94b113d4b16",
"assets/assets/images/icons/loan.png": "09a9811f08dacf9a729b7ea5435d04cb",
"assets/assets/images/icons/loan_list.png": "56fa0595f06f831dcf6cca329c0bdfe3",
"assets/assets/images/icons/loan_pay_setting.png": "24ae98d913f49fe20bd0fc52e464e0da",
"assets/assets/images/icons/manage.png": "c58289076c9e728262287d7a7b240c0e",
"assets/assets/images/icons/manageCard.png": "e355013551ae2301e55fe576553722ac",
"assets/assets/images/icons/manageDeposit-1.png": "ac73037e032c1270f5a326cf51f16e73",
"assets/assets/images/icons/manageDeposit.png": "da688eff8a0ce864a997f95086cf8b58",
"assets/assets/images/icons/manage_2.png": "10f8e1015507a78bb21c2afaf7f6cef1",
"assets/assets/images/icons/money_trasnfer.png": "3853225d5e194e6623dff0828a2e197a",
"assets/assets/images/icons/mybank.png": "f1565063cf1589c3ae78fc119c11bdd7",
"assets/assets/images/icons/nearest_branchs.png": "51e12c430c2cb8e18418c3cb0b4989d4",
"assets/assets/images/icons/NFC.png": "5a9b118b208e5cfa38750c74aa00c25a",
"assets/assets/images/icons/otherservices.png": "a593703453e04e9cf5b4c01edaeaf322",
"assets/assets/images/icons/pay_bill.png": "961affd7ab9f8d1df316a0edfd002535",
"assets/assets/images/icons/pay_loan.png": "d19077e21f14ca79ff9d01111b10e413",
"assets/assets/images/icons/profile.png": "73e58540c2704faf38b77c9cefddd6a3",
"assets/assets/images/icons/recomendations.png": "a6ee881d8fc0a002992bf38ab48d19fb",
"assets/assets/images/icons/report.png": "fa9db2aff7869579bcce0b0ada185f83",
"assets/assets/images/icons/reports.png": "c30772a1f3da1ae02acaa7464e4a576d",
"assets/assets/images/icons/rtgs_transfer.png": "e31f61455fc39194af905cb679414e93",
"assets/assets/images/icons/take_wallet.png": "c6f0e615a95680b0d85f6cc9bf3c2c3b",
"assets/assets/images/icons/ticketing.png": "0c635b3e114455eb649d395e943d2620",
"assets/assets/images/icons/transfer.png": "42f72e17712bf5894bda49d179660196",
"assets/assets/images/icons/transfer_walelt.png": "56a42e2bec088e8b15437b33adbeac23",
"assets/assets/images/icons/video_conference.png": "e92f11f925fc2d1cac979f522a5fe56f",
"assets/assets/images/icons/wallet.png": "8fe8bc579c60b5dec757050d8dc873a0",
"assets/assets/images/icons/wallet_report.png": "afec866d1af1b588f053b7c89bf00db4",
"assets/assets/images/icons/wallet_selection.png": "eef521b4b90c38715ec5c19781882059",
"assets/assets/images/icons/wallet_transfer.png": "9a5ac3b783ef5adc045d772afbf9256a",
"assets/assets/images/icons/webview.png": "d6cb6014af553367a3dc00810487553d",
"assets/assets/images/Illus_Card.png": "fbd2e9824eede939170a7d13ead80540",
"assets/assets/images/Illus_Exchange_2.png": "58d610bbbe94de837c861f3d1b4da016",
"assets/assets/images/Illus_Growth.png": "cfad53bb5138faaf9a1b0ec2544a8afe",
"assets/assets/images/Illus_Pay.png": "62bd2962922575760d9fbe848a83db19",
"assets/assets/images/logo.jpg": "c4442f264fb70f59c276d4e0c35e9cd2",
"assets/assets/images/mainCard.png": "484966fb76dcc757c8b07f351daa84f3",
"assets/assets/images/mainLogoTop.png": "406bb022671e299d44d4f5f5868670a1",
"assets/assets/images/managing.png": "5dc86ee909419d1fab4a694976d7d887",
"assets/assets/images/material_finger_print.png": "6a01a3ced135ed590343fe002cd5be7a",
"assets/assets/images/onboarding/onboarding1-old.png": "9a0c4e4a53dd12a5e7380e5390dca304",
"assets/assets/images/onboarding/onboarding1.png": "92a162c0d8ce000570cb65107f426345",
"assets/assets/images/onboarding/onboarding2.png": "1afd06bd358f01d5b3393b55dfa82433",
"assets/assets/images/onboarding/onboarding3.png": "813f0b8d24ce254f896d07b822d2f8ae",
"assets/assets/images/onboarding/onboarding4.png": "50da6b92880989421cea7a937d055678",
"assets/assets/images/onboarding/onboarding5.png": "653b9733ffd24af60eba4d0d5e552f41",
"assets/assets/images/orange_check.png": "20bc76e963cf6842855a0014d4ec4aef",
"assets/assets/images/reports/bill_report.png": "7487bc0f75b1c2f28de62f7d3ccf6f78",
"assets/assets/images/reports/charge_report.png": "bde0fe89bb6a060be499b076373f8beb",
"assets/assets/images/reports/charity_report.png": "44d8d88bcabe9a37d6c9567902c94f7d",
"assets/assets/images/reports/depCard_report.png": "540d8d77994ad79d5507e66683db01cc",
"assets/assets/images/reports/loan_report.png": "503ffbc27d4d7358e026a6f4bf0d920e",
"assets/assets/images/reports/login_report.png": "75a4e973b29b44994c689c940de4e6ea",
"assets/assets/images/reports/password_report.png": "da4164cbaab625dff395ee3686abc5e3",
"assets/assets/images/reports/pay_report.png": "506a555d74c7f98d23ad8871c96444c9",
"assets/assets/images/reports/turnover_report.png": "88b7e0c3624e722cb39ae177dbd84c37",
"assets/assets/images/sayadi/cheque.png": "d55b500768723dd325477d97c50a6961",
"assets/assets/images/sayadi/cheque_owner_status.png": "1ad7c07bfd8de66d617ce92e41d469d8",
"assets/assets/images/sayadi/cheque_registration.png": "41a32564f297d9004f427b6ce483d6ce",
"assets/assets/images/sayadi/cheque_status_inquiry.png": "6b71e456e1ac6e1421cddbd0a6e4d657",
"assets/assets/images/sayadi/cheque_transfer.png": "f08253bb30bd0a60e8bc8efc6a1c805b",
"assets/assets/images/sayadi/cheque_transfer.png.png": "f049bb322202ed1057d99c04cb688140",
"assets/assets/images/sayadi/recieved_confiramation.png": "c743e487f6d391ff03b2f23cd60214b1",
"assets/assets/images/sayadi/sample_check.png": "aa00ba97ba6f7cce8e788ba783e89f97",
"assets/assets/images/sayer.png": "190030823a61e04488101bb5dc0739f9",
"assets/assets/images/sim.png": "2001bd975e11998c6814c1517e09b625",
"assets/assets/images/sim_card/hamrah.jpg": "34676353f93e499decaf27eba2b49e54",
"assets/assets/images/sim_card/irancel.jpg": "ad6e8055130d33765daccde7de441eb6",
"assets/assets/images/sim_card/rightel.png": "e9b72161ee254586c564cad22c22085f",
"assets/assets/images/slider_0.png": "bfc645f36a4fbd1f36524de77ecc6b2d",
"assets/assets/images/slider_1.png": "291f15926af56d5a06c81d6c6b94807a",
"assets/assets/images/slider_2.png": "9a94c6b27c57c0269fc392be7576286c",
"assets/assets/images/splashScreen.png": "effc43a6adf4648e6e09d03ee14e16ac",
"assets/assets/images/Topbar.png": "b8008e20b4b84bb18dafe41ca3b335d5",
"assets/assets/images/transparent-logo.png": "55502c1460f6dbbc2a56e57ac39a9f47",
"assets/FontManifest.json": "ebd172e7aaef2357ffb70ca439cd5ce2",
"assets/fonts/IRANSansBold.ttf": "cbfb15844762c18a0d7e99e806a15197",
"assets/fonts/IRANSansRegular.ttf": "9e9280f763cbbb0ae72c95c53879b9f6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ab66bc29d0710041b8b7c8dfc48651dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/android-icon-144x144.png": "edadc20ac80b9a0b655ea35c3d262d40",
"icons/android-icon-192x192.png": "965a3f58594db909713dfdea99798f4c",
"icons/android-icon-36x36.png": "e46d953c5393a9a9b79aa7a65981a392",
"icons/android-icon-48x48.png": "fd13bb7b80419f182d45450dac52e404",
"icons/android-icon-72x72.png": "2a50f5fc57795aca878f0ebd23256e92",
"icons/android-icon-96x96.png": "7aecdc990cb147f2d410d78ff0546c38",
"icons/apple-icon-114x114.png": "d363ab14d43c825ff77d03ad1335dbfb",
"icons/apple-icon-120x120.png": "350e6d9d3f6ad53c50ea2e4a66083a6d",
"icons/apple-icon-144x144.png": "edadc20ac80b9a0b655ea35c3d262d40",
"icons/apple-icon-152x152.png": "831e3911daa4a893bc704a1655cd83d0",
"icons/apple-icon-180x180.png": "313bbb5e03c78d3b591d08cd1fa8a419",
"icons/apple-icon-57x57.png": "7780f8cebeffc45b627a1f1b28953d3d",
"icons/apple-icon-60x60.png": "a3cf1e31ce439dd4246b96073f45813c",
"icons/apple-icon-72x72.png": "2a50f5fc57795aca878f0ebd23256e92",
"icons/apple-icon-76x76.png": "735218e7d7dc21b476f79bd93994e7ba",
"icons/apple-icon-precomposed.png": "7ed27c2797d36afed8acadc122142a77",
"icons/apple-icon.png": "7ed27c2797d36afed8acadc122142a77",
"icons/browserconfig.xml": "dbfc8a10a599354cebdff43b857c79b2",
"icons/favicon-16x16.png": "512ab9ffd5f39a885da13c7515b33212",
"icons/favicon-32x32.png": "b7d4912b85853514768b7bfcde16d29e",
"icons/favicon-96x96.png": "c5d7a3d03b1dcba4f3a4f2ecf66899c8",
"icons/favicon.ico": "acff2793340c312d0b8951c27f741805",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/maskable_icon.png": "4dca2b5cb15224528bf4bf0f41384e2d",
"icons/maskable_icon_x128.png": "fead1888683b91e3bb0902db135927a4",
"icons/maskable_icon_x384.png": "82fe9419f435a4765cc7ff780f685964",
"icons/maskable_icon_x48.png": "fb5917c3a93caffff1febba99a9e3d96",
"icons/maskable_icon_x512.png": "a003691e4e4df8e485b2473d4700c251",
"icons/maskable_icon_x72.png": "da3295be0460caa132cb0389e8cd1583",
"icons/maskable_icon_x96.png": "3ca1ab5085f194c227c781b089d6b336",
"icons/ms-icon-144x144.png": "edadc20ac80b9a0b655ea35c3d262d40",
"icons/ms-icon-150x150.png": "455535b283b9074351d048e46518b837",
"icons/ms-icon-310x310.png": "7e22bf8430c67348351101d3600cbfcf",
"icons/ms-icon-70x70.png": "a1c65af1badc174d2b92b488b7ea5ef4",
"index.html": "0b745d8569583f56f473e70358d8b76b",
"/": "0b745d8569583f56f473e70358d8b76b",
"main.dart.js": "e401af2977f4e53c1f1a67257736fe2d",
"manifest.json": "dfd35bd1d7ba9f31803d40b572cf32ae",
"manifest.webmanifest": "3ac59a9e243b0405927eadee39a8aaef",
"my_loading_spinner.css": "0c49b8520c323a2e7d7360d2761f4498",
"script.js": "860c41f6ce20ebe64981049aa5c07598",
"sw.js": "4fba8dab6a63749438cc9368106b4d24",
"version.json": "fe27f858c945c4f76032d8e95ca0770d"
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
