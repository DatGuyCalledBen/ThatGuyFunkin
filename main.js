
import { createScene } from './environment.js';

// Configuration object for paths, sprites, and audio settings
const config = {
    audio: {
        fileName: window.audioFileName,
        bpm: window.audioBPM,
        vocalist: window.vocalist
    },
    paths: {
        music: `MUSIC/${window.audioFileName}.mp3`,
        vocals: `JSON/1_${window.audioFileName}_(Vocals).json`,
        bass: `JSON/1_${window.audioFileName}_(Bass).json`
    },
    sprites: {
        group: {
            loona: [
                {
                    url: "SPRITE/MIX/loona/left_sprite_sheet.png",
                    frames: 10,
                    width: 878,
                    height: 878
                },
                {
                    url: "SPRITE/MIX/loona/down_sprite_sheet.png",
                    frames: 10,
                    width: 617,
                    height: 617
                },
                {
                    url: "SPRITE/MIX/loona/up_sprite_sheet.png",
                    frames: 10,
                    width: 992,
                    height: 992
                },
                {
                    url: "SPRITE/MIX/loona/right_sprite_sheet.png",
                    frames: 10,
                    width: 796,
                    height: 796
                },
                {
                    url: "SPRITE/MIX/loona/idle_sprite_sheet.png",
                    frames: 14,
                    width: 932,
                    height: 932
                },
                {
                    url: "SPRITE/MIX/loona/idle_sprite_sheet.png",
                    frames: 14,
                    width: 932,
                    height: 932
                }
            ],
            LionMaru: [
                {
                    url: "SPRITE/MIX/17LionMaru/left_sprite_sheet.png",
                    frames: 14,
                    width: 844,
                    height: 844
                },
                {
                    url: "SPRITE/MIX/17LionMaru/down_sprite_sheet.png",
                    frames: 14,
                    width: 837,
                    height: 837
                },
                {
                    url: "SPRITE/MIX/17LionMaru/up_sprite_sheet.png",
                    frames: 14,
                    width: 884,
                    height: 884
                },
                {
                    url: "SPRITE/MIX/17LionMaru/right_sprite_sheet.png",
                    frames: 14,
                    width: 844,
                    height: 844
                },
                {
                    url: "SPRITE/MIX/17LionMaru/idle_sprite_sheet.png",
                    frames: 14,
                    width: 852,
                    height: 852
                },
                {
                    url: "SPRITE/MIX/17LionMaru/idle_sprite_sheet.png",
                    frames: 14,
                    width: 852,
                    height: 852
                }
            ],
            Miki: [
                {
                    url: "SPRITE/MIX/17Miki/left_sprite_sheet.png",
                    frames: 6,
                    width: 809,
                    height: 809
                },
                {
                    url: "SPRITE/MIX/17Miki/down_sprite_sheet.png",
                    frames: 6,
                    width: 732,
                    height: 732
                },
                {
                    url: "SPRITE/MIX/17Miki/up_sprite_sheet.png",
                    frames: 6,
                    width: 998,
                    height: 998
                },
                {
                    url: "SPRITE/MIX/17Miki/right_sprite_sheet.png",
                    frames: 6,
                    width: 774,
                    height: 774
                },
                {
                    url: "SPRITE/MIX/17Miki/idle_sprite_sheet.png",
                    frames: 14,
                    width: 821,
                    height: 821
                },
                {
                    url: "SPRITE/MIX/17Miki/idle_sprite_sheet.png",
                    frames: 14,
                    width: 821,
                    height: 821
                }
            ],
            john: [
                {
                    url: "SPRITE/MIX/3john/left_sprite_sheet.png",
                    frames: 9,
                    width: 812,
                    height: 812
                },
                {
                    url: "SPRITE/MIX/3john/down_sprite_sheet.png",
                    frames: 10,
                    width: 753,
                    height: 753
                },
                {
                    url: "SPRITE/MIX/3john/up_sprite_sheet.png",
                    frames: 8,
                    width: 900,
                    height: 900
                },
                {
                    url: "SPRITE/MIX/3john/right_sprite_sheet.png",
                    frames: 11,
                    width: 798,
                    height: 798
                },
                {
                    url: "SPRITE/MIX/3john/idle_sprite_sheet.png",
                    frames: 18,
                    width: 825,
                    height: 825
                },
                {
                    url: "SPRITE/MIX/3john/idle_sprite_sheet.png",
                    frames: 18,
                    width: 825,
                    height: 825
                }
            ],
            _BF_ASSETS: [
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/left_sprite_sheet.png",
                    frames: 15,
                    width: 476,
                    height: 476
                },
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/down_sprite_sheet.png",
                    frames: 15,
                    width: 458,
                    height: 458
                },
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/up_sprite_sheet.png",
                    frames: 15,
                    width: 529,
                    height: 529
                },
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/right_sprite_sheet.png",
                    frames: 15,
                    width: 490,
                    height: 490
                },
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/idle_sprite_sheet.png",
                    frames: 14,
                    width: 480,
                    height: 480
                },
                {
                    url: "SPRITE/MIX/420_BF_ASSETS/idle_sprite_sheet.png",
                    frames: 14,
                    width: 480,
                    height: 480
                }
            ],
            juztexd: [
                {
                    url: "SPRITE/MIX/5juztexd/left_sprite_sheet.png",
                    frames: 6,
                    width: 767,
                    height: 767
                },
                {
                    url: "SPRITE/MIX/5juztexd/down_sprite_sheet.png",
                    frames: 6,
                    width: 901,
                    height: 901
                },
                {
                    url: "SPRITE/MIX/5juztexd/up_sprite_sheet.png",
                    frames: 6,
                    width: 957,
                    height: 957
                },
                {
                    url: "SPRITE/MIX/5juztexd/right_sprite_sheet.png",
                    frames: 6,
                    width: 827,
                    height: 827
                },
                {
                    url: "SPRITE/MIX/5juztexd/idle_sprite_sheet.png",
                    frames: 12,
                    width: 820,
                    height: 820
                },
                {
                    url: "SPRITE/MIX/5juztexd/idle_sprite_sheet.png",
                    frames: 12,
                    width: 820,
                    height: 820
                }
            ],
            pivo: [
                {
                    url: "SPRITE/MIX/5pivo/left_sprite_sheet.png",
                    frames: 5,
                    width: 707,
                    height: 707
                },
                {
                    url: "SPRITE/MIX/5pivo/down_sprite_sheet.png",
                    frames: 5,
                    width: 672,
                    height: 672
                },
                {
                    url: "SPRITE/MIX/5pivo/up_sprite_sheet.png",
                    frames: 5,
                    width: 789,
                    height: 789
                },
                {
                    url: "SPRITE/MIX/5pivo/right_sprite_sheet.png",
                    frames: 5,
                    width: 736,
                    height: 736
                },
                {
                    url: "SPRITE/MIX/5pivo/idle_sprite_sheet.png",
                    frames: 9,
                    width: 717,
                    height: 717
                },
                {
                    url: "SPRITE/MIX/5pivo/idle_sprite_sheet.png",
                    frames: 9,
                    width: 717,
                    height: 717
                }
            ],
            rofos: [
                {
                    url: "SPRITE/MIX/5rofos/left_sprite_sheet.png",
                    frames: 12,
                    width: 929,
                    height: 929
                },
                {
                    url: "SPRITE/MIX/5rofos/down_sprite_sheet.png",
                    frames: 12,
                    width: 845,
                    height: 845
                },
                {
                    url: "SPRITE/MIX/5rofos/up_sprite_sheet.png",
                    frames: 12,
                    width: 1031,
                    height: 1031
                },
                {
                    url: "SPRITE/MIX/5rofos/right_sprite_sheet.png",
                    frames: 12,
                    width: 931,
                    height: 931
                },
                {
                    url: "SPRITE/MIX/5rofos/idle_sprite_sheet.png",
                    frames: 14,
                    width: 931,
                    height: 931
                },
                {
                    url: "SPRITE/MIX/5rofos/idle_sprite_sheet.png",
                    frames: 14,
                    width: 931,
                    height: 931
                }
            ],
            airmarshal: [
                {
                    url: "SPRITE/MIX/airmarshal/left_sprite_sheet.png",
                    frames: 8,
                    width: 987,
                    height: 987
                },
                {
                    url: "SPRITE/MIX/airmarshal/down_sprite_sheet.png",
                    frames: 8,
                    width: 859,
                    height: 859
                },
                {
                    url: "SPRITE/MIX/airmarshal/up_sprite_sheet.png",
                    frames: 8,
                    width: 1080,
                    height: 1080
                },
                {
                    url: "SPRITE/MIX/airmarshal/right_sprite_sheet.png",
                    frames: 8,
                    width: 875,
                    height: 875
                },
                {
                    url: "SPRITE/MIX/airmarshal/idle_sprite_sheet.png",
                    frames: 8,
                    width: 936,
                    height: 936
                },
                {
                    url: "SPRITE/MIX/airmarshal/idle_sprite_sheet.png",
                    frames: 8,
                    width: 936,
                    height: 936
                }
            ],
            aldoxv1: [
                {
                    url: "SPRITE/MIX/aldoxv1/left_sprite_sheet.png",
                    frames: 6,
                    width: 759,
                    height: 759
                },
                {
                    url: "SPRITE/MIX/aldoxv1/down_sprite_sheet.png",
                    frames: 6,
                    width: 731,
                    height: 731
                },
                {
                    url: "SPRITE/MIX/aldoxv1/up_sprite_sheet.png",
                    frames: 6,
                    width: 822,
                    height: 822
                },
                {
                    url: "SPRITE/MIX/aldoxv1/right_sprite_sheet.png",
                    frames: 6,
                    width: 767,
                    height: 767
                },
                {
                    url: "SPRITE/MIX/aldoxv1/idle_sprite_sheet.png",
                    frames: 14,
                    width: 786,
                    height: 786
                },
                {
                    url: "SPRITE/MIX/aldoxv1/idle_sprite_sheet.png",
                    frames: 14,
                    width: 786,
                    height: 786
                }
            ],
            alien: [
                {
                    url: "SPRITE/MIX/alien/left_sprite_sheet.png",
                    frames: 13,
                    width: 1272,
                    height: 1272
                },
                {
                    url: "SPRITE/MIX/alien/down_sprite_sheet.png",
                    frames: 11,
                    width: 1220,
                    height: 1220
                },
                {
                    url: "SPRITE/MIX/alien/up_sprite_sheet.png",
                    frames: 11,
                    width: 1385,
                    height: 1385
                },
                {
                    url: "SPRITE/MIX/alien/right_sprite_sheet.png",
                    frames: 9,
                    width: 1272,
                    height: 1272
                },
                {
                    url: "SPRITE/MIX/alien/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1271,
                    height: 1271
                },
                {
                    url: "SPRITE/MIX/alien/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1271,
                    height: 1271
                }
            ],
            anti: [
                {
                    url: "SPRITE/MIX/anti/left_sprite_sheet.png",
                    frames: 14,
                    width: 652,
                    height: 652
                },
                {
                    url: "SPRITE/MIX/anti/down_sprite_sheet.png",
                    frames: 14,
                    width: 605,
                    height: 605
                },
                {
                    url: "SPRITE/MIX/anti/right_sprite_sheet.png",
                    frames: 14,
                    width: 655,
                    height: 655
                },
                {
                    url: "SPRITE/MIX/anti/idle_sprite_sheet.png",
                    frames: 14,
                    width: 655,
                    height: 655
                },
                {
                    url: "SPRITE/MIX/anti/idle_sprite_sheet.png",
                    frames: 14,
                    width: 655,
                    height: 655
                }
            ],
            bfWerewolf: [
                {
                    url: "SPRITE/MIX/bfWerewolf/left_sprite_sheet.png",
                    frames: 30,
                    width: 579,
                    height: 579
                },
                {
                    url: "SPRITE/MIX/bfWerewolf/down_sprite_sheet.png",
                    frames: 30,
                    width: 563,
                    height: 563
                },
                {
                    url: "SPRITE/MIX/bfWerewolf/up_sprite_sheet.png",
                    frames: 30,
                    width: 552,
                    height: 552
                },
                {
                    url: "SPRITE/MIX/bfWerewolf/right_sprite_sheet.png",
                    frames: 30,
                    width: 545,
                    height: 545
                },
                {
                    url: "SPRITE/MIX/bfWerewolf/idle_sprite_sheet.png",
                    frames: 14,
                    width: 569,
                    height: 569
                },
                {
                    url: "SPRITE/MIX/bfWerewolf/idle_sprite_sheet.png",
                    frames: 14,
                    width: 569,
                    height: 569
                }
            ],
            binej: [
                {
                    url: "SPRITE/MIX/binej/left_sprite_sheet.png",
                    frames: 8,
                    width: 1074,
                    height: 1074
                },
                {
                    url: "SPRITE/MIX/binej/down_sprite_sheet.png",
                    frames: 7,
                    width: 936,
                    height: 936
                },
                {
                    url: "SPRITE/MIX/binej/up_sprite_sheet.png",
                    frames: 7,
                    width: 1206,
                    height: 1206
                },
                {
                    url: "SPRITE/MIX/binej/right_sprite_sheet.png",
                    frames: 6,
                    width: 1079,
                    height: 1079
                },
                {
                    url: "SPRITE/MIX/binej/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1086,
                    height: 1086
                },
                {
                    url: "SPRITE/MIX/binej/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1086,
                    height: 1086
                }
            ],
            boyfrind: [
                {
                    url: "SPRITE/MIX/boyfrind/left_sprite_sheet.png",
                    frames: 12,
                    width: 497,
                    height: 497
                },
                {
                    url: "SPRITE/MIX/boyfrind/down_sprite_sheet.png",
                    frames: 9,
                    width: 481,
                    height: 481
                },
                {
                    url: "SPRITE/MIX/boyfrind/up_sprite_sheet.png",
                    frames: 11,
                    width: 550,
                    height: 550
                },
                {
                    url: "SPRITE/MIX/boyfrind/right_sprite_sheet.png",
                    frames: 21,
                    width: 498,
                    height: 498
                },
                {
                    url: "SPRITE/MIX/boyfrind/idle_sprite_sheet.png",
                    frames: 14,
                    width: 501,
                    height: 501
                },
                {
                    url: "SPRITE/MIX/boyfrind/idle_sprite_sheet.png",
                    frames: 14,
                    width: 501,
                    height: 501
                }
            ],
            cyyc: [
                {
                    url: "SPRITE/MIX/cyyc/left_sprite_sheet.png",
                    frames: 9,
                    width: 809,
                    height: 809
                },
                {
                    url: "SPRITE/MIX/cyyc/down_sprite_sheet.png",
                    frames: 10,
                    width: 801,
                    height: 801
                },
                {
                    url: "SPRITE/MIX/cyyc/up_sprite_sheet.png",
                    frames: 8,
                    width: 865,
                    height: 865
                },
                {
                    url: "SPRITE/MIX/cyyc/right_sprite_sheet.png",
                    frames: 12,
                    width: 811,
                    height: 811
                },
                {
                    url: "SPRITE/MIX/cyyc/idle_sprite_sheet.png",
                    frames: 14,
                    width: 832,
                    height: 832
                },
                {
                    url: "SPRITE/MIX/cyyc/idle_sprite_sheet.png",
                    frames: 14,
                    width: 832,
                    height: 832
                }
            ],
            Edd: [
                {
                    url: "SPRITE/MIX/Edd/left_sprite_sheet.png",
                    frames: 6,
                    width: 853,
                    height: 853
                },
                {
                    url: "SPRITE/MIX/Edd/down_sprite_sheet.png",
                    frames: 6,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/Edd/up_sprite_sheet.png",
                    frames: 6,
                    width: 890,
                    height: 890
                },
                {
                    url: "SPRITE/MIX/Edd/right_sprite_sheet.png",
                    frames: 6,
                    width: 840,
                    height: 840
                },
                {
                    url: "SPRITE/MIX/Edd/idle_sprite_sheet.png",
                    frames: 14,
                    width: 862,
                    height: 862
                },
                {
                    url: "SPRITE/MIX/Edd/idle_sprite_sheet.png",
                    frames: 14,
                    width: 862,
                    height: 862
                }
            ],
            FireDerg_Assets: [
                {
                    url: "SPRITE/MIX/FireDerg_Assets/left_sprite_sheet.png",
                    frames: 16,
                    width: 988,
                    height: 988
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets/down_sprite_sheet.png",
                    frames: 16,
                    width: 1055,
                    height: 1055
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets/up_sprite_sheet.png",
                    frames: 16,
                    width: 1062,
                    height: 1062
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets/right_sprite_sheet.png",
                    frames: 16,
                    width: 1001,
                    height: 1001
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                }
            ],
            FireDerg_Assets_verm1: [
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/left_sprite_sheet.png",
                    frames: 16,
                    width: 988,
                    height: 988
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/down_sprite_sheet.png",
                    frames: 16,
                    width: 1055,
                    height: 1055
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/up_sprite_sheet.png",
                    frames: 16,
                    width: 1062,
                    height: 1062
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/right_sprite_sheet.png",
                    frames: 16,
                    width: 1001,
                    height: 1001
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm1/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                }
            ],
            FireDerg_Assets_verm2: [
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/left_sprite_sheet.png",
                    frames: 16,
                    width: 988,
                    height: 988
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/down_sprite_sheet.png",
                    frames: 16,
                    width: 1055,
                    height: 1055
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/up_sprite_sheet.png",
                    frames: 16,
                    width: 1062,
                    height: 1062
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/right_sprite_sheet.png",
                    frames: 16,
                    width: 1001,
                    height: 1001
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                },
                {
                    url: "SPRITE/MIX/FireDerg_Assets_verm2/idle_sprite_sheet.png",
                    frames: 18,
                    width: 956,
                    height: 956
                }
            ],
            FireDoggy_Assets: [
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/left_sprite_sheet.png",
                    frames: 14,
                    width: 1020,
                    height: 1020
                },
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/down_sprite_sheet.png",
                    frames: 14,
                    width: 848,
                    height: 848
                },
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/up_sprite_sheet.png",
                    frames: 14,
                    width: 1136,
                    height: 1136
                },
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/right_sprite_sheet.png",
                    frames: 14,
                    width: 909,
                    height: 909
                },
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1053,
                    height: 1053
                },
                {
                    url: "SPRITE/MIX/FireDoggy_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1053,
                    height: 1053
                }
            ],
            girlf: [
                {
                    url: "SPRITE/MIX/girlf/left_sprite_sheet.png",
                    frames: 5,
                    width: 726,
                    height: 726
                },
                {
                    url: "SPRITE/MIX/girlf/down_sprite_sheet.png",
                    frames: 9,
                    width: 675,
                    height: 675
                },
                {
                    url: "SPRITE/MIX/girlf/up_sprite_sheet.png",
                    frames: 4,
                    width: 796,
                    height: 796
                },
                {
                    url: "SPRITE/MIX/girlf/right_sprite_sheet.png",
                    frames: 5,
                    width: 735,
                    height: 735
                },
                {
                    url: "SPRITE/MIX/girlf/idle_sprite_sheet.png",
                    frames: 14,
                    width: 748,
                    height: 748
                },
                {
                    url: "SPRITE/MIX/girlf/idle_sprite_sheet.png",
                    frames: 14,
                    width: 748,
                    height: 748
                }
            ],
            gonzo: [
                {
                    url: "SPRITE/MIX/gonzo/left_sprite_sheet.png",
                    frames: 6,
                    width: 751,
                    height: 751
                },
                {
                    url: "SPRITE/MIX/gonzo/down_sprite_sheet.png",
                    frames: 6,
                    width: 640,
                    height: 640
                },
                {
                    url: "SPRITE/MIX/gonzo/up_sprite_sheet.png",
                    frames: 6,
                    width: 818,
                    height: 818
                },
                {
                    url: "SPRITE/MIX/gonzo/right_sprite_sheet.png",
                    frames: 6,
                    width: 675,
                    height: 675
                },
                {
                    url: "SPRITE/MIX/gonzo/idle_sprite_sheet.png",
                    frames: 14,
                    width: 750,
                    height: 750
                },
                {
                    url: "SPRITE/MIX/gonzo/idle_sprite_sheet.png",
                    frames: 14,
                    width: 750,
                    height: 750
                }
            ],
            gr1z: [
                {
                    url: "SPRITE/MIX/gr1z/left_sprite_sheet.png",
                    frames: 15,
                    width: 864,
                    height: 864
                },
                {
                    url: "SPRITE/MIX/gr1z/down_sprite_sheet.png",
                    frames: 17,
                    width: 813,
                    height: 813
                },
                {
                    url: "SPRITE/MIX/gr1z/up_sprite_sheet.png",
                    frames: 17,
                    width: 908,
                    height: 908
                },
                {
                    url: "SPRITE/MIX/gr1z/right_sprite_sheet.png",
                    frames: 17,
                    width: 874,
                    height: 874
                },
                {
                    url: "SPRITE/MIX/gr1z/idle_sprite_sheet.png",
                    frames: 17,
                    width: 870,
                    height: 870
                },
                {
                    url: "SPRITE/MIX/gr1z/idle_sprite_sheet.png",
                    frames: 17,
                    width: 870,
                    height: 870
                }
            ],
            gunlex: [
                {
                    url: "SPRITE/MIX/gunlex/left_sprite_sheet.png",
                    frames: 6,
                    width: 633,
                    height: 633
                },
                {
                    url: "SPRITE/MIX/gunlex/down_sprite_sheet.png",
                    frames: 6,
                    width: 606,
                    height: 606
                },
                {
                    url: "SPRITE/MIX/gunlex/up_sprite_sheet.png",
                    frames: 6,
                    width: 677,
                    height: 677
                },
                {
                    url: "SPRITE/MIX/gunlex/right_sprite_sheet.png",
                    frames: 8,
                    width: 660,
                    height: 660
                },
                {
                    url: "SPRITE/MIX/gunlex/idle_sprite_sheet.png",
                    frames: 14,
                    width: 642,
                    height: 642
                },
                {
                    url: "SPRITE/MIX/gunlex/idle_sprite_sheet.png",
                    frames: 14,
                    width: 642,
                    height: 642
                }
            ],
            HalloweenMikana_Sprites: [
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/left_sprite_sheet.png",
                    frames: 10,
                    width: 650,
                    height: 650
                },
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/down_sprite_sheet.png",
                    frames: 9,
                    width: 650,
                    height: 650
                },
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/up_sprite_sheet.png",
                    frames: 10,
                    width: 650,
                    height: 650
                },
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/right_sprite_sheet.png",
                    frames: 10,
                    width: 650,
                    height: 650
                },
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/idle_sprite_sheet.png",
                    frames: 11,
                    width: 650,
                    height: 650
                },
                {
                    url: "SPRITE/MIX/HalloweenMikana_Sprites/idle_sprite_sheet.png",
                    frames: 11,
                    width: 650,
                    height: 650
                }
            ],
            HalloweenNN_Sprites: [
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/left_sprite_sheet.png",
                    frames: 8,
                    width: 731,
                    height: 731
                },
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/down_sprite_sheet.png",
                    frames: 9,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/up_sprite_sheet.png",
                    frames: 9,
                    width: 750,
                    height: 750
                },
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/right_sprite_sheet.png",
                    frames: 8,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/idle_sprite_sheet.png",
                    frames: 12,
                    width: 750,
                    height: 750
                },
                {
                    url: "SPRITE/MIX/HalloweenNN_Sprites/idle_sprite_sheet.png",
                    frames: 12,
                    width: 750,
                    height: 750
                }
            ],
            HalloweenSanx_Sprites: [
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/left_sprite_sheet.png",
                    frames: 7,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/down_sprite_sheet.png",
                    frames: 7,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/up_sprite_sheet.png",
                    frames: 8,
                    width: 850,
                    height: 850
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/right_sprite_sheet.png",
                    frames: 6,
                    width: 800,
                    height: 800
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/idle_sprite_sheet.png",
                    frames: 10,
                    width: 800,
                    height: 800
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites/idle_sprite_sheet.png",
                    frames: 10,
                    width: 800,
                    height: 800
                }
            ],
            HalloweenSanx_Sprites2: [
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/left_sprite_sheet.png",
                    frames: 24,
                    width: 804,
                    height: 804
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/down_sprite_sheet.png",
                    frames: 28,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/up_sprite_sheet.png",
                    frames: 24,
                    width: 782,
                    height: 782
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/right_sprite_sheet.png",
                    frames: 24,
                    width: 733,
                    height: 733
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/idle_sprite_sheet.png",
                    frames: 24,
                    width: 836,
                    height: 836
                },
                {
                    url: "SPRITE/MIX/HalloweenSanx_Sprites2/idle_sprite_sheet.png",
                    frames: 24,
                    width: 836,
                    height: 836
                }
            ],
            isa: [
                {
                    url: "SPRITE/MIX/isa/left_sprite_sheet.png",
                    frames: 8,
                    width: 776,
                    height: 776
                },
                {
                    url: "SPRITE/MIX/isa/down_sprite_sheet.png",
                    frames: 7,
                    width: 637,
                    height: 637
                },
                {
                    url: "SPRITE/MIX/isa/up_sprite_sheet.png",
                    frames: 7,
                    width: 820,
                    height: 820
                },
                {
                    url: "SPRITE/MIX/isa/right_sprite_sheet.png",
                    frames: 8,
                    width: 782,
                    height: 782
                },
                {
                    url: "SPRITE/MIX/isa/idle_sprite_sheet.png",
                    frames: 14,
                    width: 791,
                    height: 791
                },
                {
                    url: "SPRITE/MIX/isa/idle_sprite_sheet.png",
                    frames: 14,
                    width: 791,
                    height: 791
                }
            ],
            Kanye: [
                {
                    url: "SPRITE/MIX/Kanye/left_sprite_sheet.png",
                    frames: 5,
                    width: 498,
                    height: 498
                },
                {
                    url: "SPRITE/MIX/Kanye/down_sprite_sheet.png",
                    frames: 6,
                    width: 453,
                    height: 453
                },
                {
                    url: "SPRITE/MIX/Kanye/up_sprite_sheet.png",
                    frames: 6,
                    width: 529,
                    height: 529
                },
                {
                    url: "SPRITE/MIX/Kanye/right_sprite_sheet.png",
                    frames: 3,
                    width: 511,
                    height: 511
                },
                {
                    url: "SPRITE/MIX/Kanye/idle_sprite_sheet.png",
                    frames: 16,
                    width: 513,
                    height: 513
                },
                {
                    url: "SPRITE/MIX/Kanye/idle_sprite_sheet.png",
                    frames: 16,
                    width: 513,
                    height: 513
                }
            ],
            kevin: [
                {
                    url: "SPRITE/MIX/kevin/left_sprite_sheet.png",
                    frames: 14,
                    width: 1010,
                    height: 1010
                },
                {
                    url: "SPRITE/MIX/kevin/down_sprite_sheet.png",
                    frames: 14,
                    width: 961,
                    height: 961
                },
                {
                    url: "SPRITE/MIX/kevin/up_sprite_sheet.png",
                    frames: 14,
                    width: 1203,
                    height: 1203
                },
                {
                    url: "SPRITE/MIX/kevin/right_sprite_sheet.png",
                    frames: 19,
                    width: 1050,
                    height: 1050
                },
                {
                    url: "SPRITE/MIX/kevin/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1012,
                    height: 1012
                },
                {
                    url: "SPRITE/MIX/kevin/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1012,
                    height: 1012
                }
            ],
            lex: [
                {
                    url: "SPRITE/MIX/lex/left_sprite_sheet.png",
                    frames: 6,
                    width: 633,
                    height: 633
                },
                {
                    url: "SPRITE/MIX/lex/down_sprite_sheet.png",
                    frames: 6,
                    width: 606,
                    height: 606
                },
                {
                    url: "SPRITE/MIX/lex/up_sprite_sheet.png",
                    frames: 6,
                    width: 684,
                    height: 684
                },
                {
                    url: "SPRITE/MIX/lex/right_sprite_sheet.png",
                    frames: 8,
                    width: 660,
                    height: 660
                },
                {
                    url: "SPRITE/MIX/lex/idle_sprite_sheet.png",
                    frames: 14,
                    width: 641,
                    height: 641
                },
                {
                    url: "SPRITE/MIX/lex/idle_sprite_sheet.png",
                    frames: 14,
                    width: 641,
                    height: 641
                }
            ],
            Lyc_Assets: [
                {
                    url: "SPRITE/MIX/Lyc_Assets/left_sprite_sheet.png",
                    frames: 14,
                    width: 1070,
                    height: 1070
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets/down_sprite_sheet.png",
                    frames: 14,
                    width: 979,
                    height: 979
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets/up_sprite_sheet.png",
                    frames: 14,
                    width: 1139,
                    height: 1139
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets/right_sprite_sheet.png",
                    frames: 14,
                    width: 1041,
                    height: 1041
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                }
            ],
            Lyc_Assets_green: [
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/left_sprite_sheet.png",
                    frames: 14,
                    width: 1070,
                    height: 1070
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/down_sprite_sheet.png",
                    frames: 14,
                    width: 979,
                    height: 979
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/up_sprite_sheet.png",
                    frames: 14,
                    width: 1139,
                    height: 1139
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/right_sprite_sheet.png",
                    frames: 14,
                    width: 1041,
                    height: 1041
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_green/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                }
            ],
            Lyc_Assets_red: [
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/left_sprite_sheet.png",
                    frames: 14,
                    width: 1070,
                    height: 1070
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/down_sprite_sheet.png",
                    frames: 14,
                    width: 979,
                    height: 979
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/up_sprite_sheet.png",
                    frames: 14,
                    width: 1139,
                    height: 1139
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/right_sprite_sheet.png",
                    frames: 14,
                    width: 1041,
                    height: 1041
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                },
                {
                    url: "SPRITE/MIX/Lyc_Assets_red/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1023,
                    height: 1023
                }
            ],
            MadTabi: [
                {
                    url: "SPRITE/MIX/MadTabi/left_sprite_sheet.png",
                    frames: 14,
                    width: 749,
                    height: 749
                },
                {
                    url: "SPRITE/MIX/MadTabi/down_sprite_sheet.png",
                    frames: 14,
                    width: 686,
                    height: 686
                },
                {
                    url: "SPRITE/MIX/MadTabi/up_sprite_sheet.png",
                    frames: 14,
                    width: 838,
                    height: 838
                },
                {
                    url: "SPRITE/MIX/MadTabi/right_sprite_sheet.png",
                    frames: 14,
                    width: 720,
                    height: 720
                },
                {
                    url: "SPRITE/MIX/MadTabi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 733,
                    height: 733
                },
                {
                    url: "SPRITE/MIX/MadTabi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 733,
                    height: 733
                }
            ],
            magman: [
                {
                    url: "SPRITE/MIX/magman/left_sprite_sheet.png",
                    frames: 18,
                    width: 931,
                    height: 931
                },
                {
                    url: "SPRITE/MIX/magman/down_sprite_sheet.png",
                    frames: 12,
                    width: 886,
                    height: 886
                },
                {
                    url: "SPRITE/MIX/magman/up_sprite_sheet.png",
                    frames: 6,
                    width: 958,
                    height: 958
                },
                {
                    url: "SPRITE/MIX/magman/right_sprite_sheet.png",
                    frames: 6,
                    width: 922,
                    height: 922
                },
                {
                    url: "SPRITE/MIX/magman/idle_sprite_sheet.png",
                    frames: 42,
                    width: 931,
                    height: 931
                },
                {
                    url: "SPRITE/MIX/magman/idle_sprite_sheet.png",
                    frames: 42,
                    width: 931,
                    height: 931
                }
            ],
            MattAssets: [
                {
                    url: "SPRITE/MIX/MattAssets/left_sprite_sheet.png",
                    frames: 14,
                    width: 708,
                    height: 708
                },
                {
                    url: "SPRITE/MIX/MattAssets/down_sprite_sheet.png",
                    frames: 14,
                    width: 639,
                    height: 639
                },
                {
                    url: "SPRITE/MIX/MattAssets/up_sprite_sheet.png",
                    frames: 70,
                    width: 751,
                    height: 751
                },
                {
                    url: "SPRITE/MIX/MattAssets/right_sprite_sheet.png",
                    frames: 14,
                    width: 723,
                    height: 723
                },
                {
                    url: "SPRITE/MIX/MattAssets/idle_sprite_sheet.png",
                    frames: 28,
                    width: 717,
                    height: 717
                },
                {
                    url: "SPRITE/MIX/MattAssets/idle_sprite_sheet.png",
                    frames: 28,
                    width: 717,
                    height: 717
                }
            ],
            mimi: [
                {
                    url: "SPRITE/MIX/mimi/left_sprite_sheet.png",
                    frames: 11,
                    width: 686,
                    height: 686
                },
                {
                    url: "SPRITE/MIX/mimi/down_sprite_sheet.png",
                    frames: 12,
                    width: 666,
                    height: 666
                },
                {
                    url: "SPRITE/MIX/mimi/up_sprite_sheet.png",
                    frames: 16,
                    width: 716,
                    height: 716
                },
                {
                    url: "SPRITE/MIX/mimi/right_sprite_sheet.png",
                    frames: 10,
                    width: 689,
                    height: 689
                },
                {
                    url: "SPRITE/MIX/mimi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 681,
                    height: 681
                },
                {
                    url: "SPRITE/MIX/mimi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 681,
                    height: 681
                }
            ],
            n1ko: [
                {
                    url: "SPRITE/MIX/n1ko/left_sprite_sheet.png",
                    frames: 14,
                    width: 981,
                    height: 981
                },
                {
                    url: "SPRITE/MIX/n1ko/down_sprite_sheet.png",
                    frames: 14,
                    width: 956,
                    height: 956
                },
                {
                    url: "SPRITE/MIX/n1ko/up_sprite_sheet.png",
                    frames: 14,
                    width: 1028,
                    height: 1028
                },
                {
                    url: "SPRITE/MIX/n1ko/right_sprite_sheet.png",
                    frames: 14,
                    width: 995,
                    height: 995
                },
                {
                    url: "SPRITE/MIX/n1ko/idle_sprite_sheet.png",
                    frames: 13,
                    width: 992,
                    height: 992
                },
                {
                    url: "SPRITE/MIX/n1ko/idle_sprite_sheet.png",
                    frames: 13,
                    width: 992,
                    height: 992
                }
            ],
            PAPA_MAGNAMAN_5_RUBLE: [
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/left_sprite_sheet.png",
                    frames: 6,
                    width: 921,
                    height: 921
                },
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/down_sprite_sheet.png",
                    frames: 6,
                    width: 880,
                    height: 880
                },
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/up_sprite_sheet.png",
                    frames: 6,
                    width: 943,
                    height: 943
                },
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/right_sprite_sheet.png",
                    frames: 6,
                    width: 926,
                    height: 926
                },
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/idle_sprite_sheet.png",
                    frames: 43,
                    width: 927,
                    height: 927
                },
                {
                    url: "SPRITE/MIX/PAPA_MAGNAMAN_5_RUBLE/idle_sprite_sheet.png",
                    frames: 43,
                    width: 927,
                    height: 927
                }
            ],
            peacock: [
                {
                    url: "SPRITE/MIX/peacock/left_sprite_sheet.png",
                    frames: 28,
                    width: 712,
                    height: 712
                },
                {
                    url: "SPRITE/MIX/peacock/down_sprite_sheet.png",
                    frames: 28,
                    width: 699,
                    height: 699
                },
                {
                    url: "SPRITE/MIX/peacock/up_sprite_sheet.png",
                    frames: 28,
                    width: 767,
                    height: 767
                },
                {
                    url: "SPRITE/MIX/peacock/right_sprite_sheet.png",
                    frames: 28,
                    width: 718,
                    height: 718
                },
                {
                    url: "SPRITE/MIX/peacock/idle_sprite_sheet.png",
                    frames: 14,
                    width: 712,
                    height: 712
                },
                {
                    url: "SPRITE/MIX/peacock/idle_sprite_sheet.png",
                    frames: 14,
                    width: 712,
                    height: 712
                }
            ],
            pic: [
                {
                    url: "SPRITE/MIX/pic/left_sprite_sheet.png",
                    frames: 4,
                    width: 550,
                    height: 550
                },
                {
                    url: "SPRITE/MIX/pic/down_sprite_sheet.png",
                    frames: 4,
                    width: 534,
                    height: 534
                },
                {
                    url: "SPRITE/MIX/pic/up_sprite_sheet.png",
                    frames: 4,
                    width: 608,
                    height: 608
                },
                {
                    url: "SPRITE/MIX/pic/right_sprite_sheet.png",
                    frames: 4,
                    width: 575,
                    height: 575
                },
                {
                    url: "SPRITE/MIX/pic/idle_sprite_sheet.png",
                    frames: 14,
                    width: 553,
                    height: 553
                },
                {
                    url: "SPRITE/MIX/pic/idle_sprite_sheet.png",
                    frames: 14,
                    width: 553,
                    height: 553
                }
            ],
            Playable_GF_V2: [
                {
                    url: "SPRITE/MIX/Playable GF V2/left_sprite_sheet.png",
                    frames: 16,
                    width: 470,
                    height: 470
                },
                {
                    url: "SPRITE/MIX/Playable GF V2/down_sprite_sheet.png",
                    frames: 16,
                    width: 415,
                    height: 415
                },
                {
                    url: "SPRITE/MIX/Playable GF V2/up_sprite_sheet.png",
                    frames: 16,
                    width: 503,
                    height: 503
                },
                {
                    url: "SPRITE/MIX/Playable GF V2/right_sprite_sheet.png",
                    frames: 16,
                    width: 485,
                    height: 485
                },
                {
                    url: "SPRITE/MIX/Playable GF V2/idle_sprite_sheet.png",
                    frames: 16,
                    width: 493,
                    height: 493
                },
                {
                    url: "SPRITE/MIX/Playable GF V2/idle_sprite_sheet.png",
                    frames: 16,
                    width: 493,
                    height: 493
                }
            ],
            ponnick: [
                {
                    url: "SPRITE/MIX/ponnick/left_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 1000
                },
                {
                    url: "SPRITE/MIX/ponnick/down_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 1000
                },
                {
                    url: "SPRITE/MIX/ponnick/up_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 1000
                },
                {
                    url: "SPRITE/MIX/ponnick/right_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 1000
                },
                {
                    url: "SPRITE/MIX/ponnick/idle_sprite_sheet.png",
                    frames: 9,
                    width: 1000,
                    height: 1000
                },
                {
                    url: "SPRITE/MIX/ponnick/idle_sprite_sheet.png",
                    frames: 9,
                    width: 1000,
                    height: 1000
                }
            ],
            Pookie: [
                {
                    url: "SPRITE/MIX/Pookie/left_sprite_sheet.png",
                    frames: 14,
                    width: 922,
                    height: 922
                },
                {
                    url: "SPRITE/MIX/Pookie/down_sprite_sheet.png",
                    frames: 14,
                    width: 875,
                    height: 875
                },
                {
                    url: "SPRITE/MIX/Pookie/up_sprite_sheet.png",
                    frames: 14,
                    width: 957,
                    height: 957
                },
                {
                    url: "SPRITE/MIX/Pookie/right_sprite_sheet.png",
                    frames: 14,
                    width: 920,
                    height: 920
                },
                {
                    url: "SPRITE/MIX/Pookie/idle_sprite_sheet.png",
                    frames: 14,
                    width: 920,
                    height: 920
                },
                {
                    url: "SPRITE/MIX/Pookie/idle_sprite_sheet.png",
                    frames: 14,
                    width: 920,
                    height: 920
                }
            ],
            raffi420: [
                {
                    url: "SPRITE/MIX/raffi420/left_sprite_sheet.png",
                    frames: 14,
                    width: 743,
                    height: 743
                },
                {
                    url: "SPRITE/MIX/raffi420/down_sprite_sheet.png",
                    frames: 14,
                    width: 671,
                    height: 671
                },
                {
                    url: "SPRITE/MIX/raffi420/up_sprite_sheet.png",
                    frames: 14,
                    width: 777,
                    height: 777
                },
                {
                    url: "SPRITE/MIX/raffi420/right_sprite_sheet.png",
                    frames: 14,
                    width: 713,
                    height: 713
                },
                {
                    url: "SPRITE/MIX/raffi420/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1237,
                    height: 1237
                },
                {
                    url: "SPRITE/MIX/raffi420/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1237,
                    height: 1237
                }
            ],
            rasazyV3: [
                {
                    url: "SPRITE/MIX/rasazyV3/left_sprite_sheet.png",
                    frames: 4,
                    width: 1500,
                    height: 1500
                },
                {
                    url: "SPRITE/MIX/rasazyV3/down_sprite_sheet.png",
                    frames: 4,
                    width: 1500,
                    height: 1500
                },
                {
                    url: "SPRITE/MIX/rasazyV3/up_sprite_sheet.png",
                    frames: 4,
                    width: 1500,
                    height: 1500
                },
                {
                    url: "SPRITE/MIX/rasazyV3/right_sprite_sheet.png",
                    frames: 4,
                    width: 1500,
                    height: 1500
                },
                {
                    url: "SPRITE/MIX/rasazyV3/idle_sprite_sheet.png",
                    frames: 6,
                    width: 1500,
                    height: 1500
                },
                {
                    url: "SPRITE/MIX/rasazyV3/idle_sprite_sheet.png",
                    frames: 6,
                    width: 1500,
                    height: 1500
                }
            ],
            raeal: [
                {
                    url: "SPRITE/MIX/raeal/left_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 857
                },
                {
                    url: "SPRITE/MIX/raeal/down_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 857
                },
                {
                    url: "SPRITE/MIX/raeal/up_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 857
                },
                {
                    url: "SPRITE/MIX/raeal/right_sprite_sheet.png",
                    frames: 3,
                    width: 1000,
                    height: 857
                },
                {
                    url: "SPRITE/MIX/raeal/idle_sprite_sheet.png",
                    frames: 5,
                    width: 857,
                    height: 857
                },
                {
                    url: "SPRITE/MIX/raeal/idle_sprite_sheet.png",
                    frames: 5,
                    width: 857,
                    height: 857
                }
            ],
            reaver: [
                {
                    url: "SPRITE/MIX/reaver/left_sprite_sheet.png",
                    frames: 14,
                    width: 1103,
                    height: 1103
                },
                {
                    url: "SPRITE/MIX/reaver/down_sprite_sheet.png",
                    frames: 14,
                    width: 978,
                    height: 978
                },
                {
                    url: "SPRITE/MIX/reaver/up_sprite_sheet.png",
                    frames: 14,
                    width: 1143,
                    height: 1143
                },
                {
                    url: "SPRITE/MIX/reaver/right_sprite_sheet.png",
                    frames: 14,
                    width: 732,
                    height: 732
                },
                {
                    url: "SPRITE/MIX/reaver/idle_sprite_sheet.png",
                    frames: 20,
                    width: 850,
                    height: 850
                },
                {
                    url: "SPRITE/MIX/reaver/idle_sprite_sheet.png",
                    frames: 20,
                    width: 850,
                    height: 850
                }
            ],
            req: [
                {
                    url: "SPRITE/MIX/req/left_sprite_sheet.png",
                    frames: 12,
                    width: 737,
                    height: 737
                },
                {
                    url: "SPRITE/MIX/req/down_sprite_sheet.png",
                    frames: 11,
                    width: 680,
                    height: 680
                },
                {
                    url: "SPRITE/MIX/req/up_sprite_sheet.png",
                    frames: 9,
                    width: 744,
                    height: 744
                },
                {
                    url: "SPRITE/MIX/req/right_sprite_sheet.png",
                    frames: 12,
                    width: 716,
                    height: 716
                },
                {
                    url: "SPRITE/MIX/req/idle_sprite_sheet.png",
                    frames: 14,
                    width: 729,
                    height: 729
                },
                {
                    url: "SPRITE/MIX/req/idle_sprite_sheet.png",
                    frames: 14,
                    width: 729,
                    height: 729
                }
            ],
            rubl4new: [
                {
                    url: "SPRITE/MIX/rubl4new/left_sprite_sheet.png",
                    frames: 16,
                    width: 794,
                    height: 794
                },
                {
                    url: "SPRITE/MIX/rubl4new/down_sprite_sheet.png",
                    frames: 16,
                    width: 735,
                    height: 735
                },
                {
                    url: "SPRITE/MIX/rubl4new/up_sprite_sheet.png",
                    frames: 16,
                    width: 831,
                    height: 831
                },
                {
                    url: "SPRITE/MIX/rubl4new/right_sprite_sheet.png",
                    frames: 16,
                    width: 798,
                    height: 798
                },
                {
                    url: "SPRITE/MIX/rubl4new/idle_sprite_sheet.png",
                    frames: 14,
                    width: 793,
                    height: 793
                },
                {
                    url: "SPRITE/MIX/rubl4new/idle_sprite_sheet.png",
                    frames: 14,
                    width: 793,
                    height: 793
                }
            ],
            rubl4Ss: [
                {
                    url: "SPRITE/MIX/rubl4Ss/left_sprite_sheet.png",
                    frames: 5,
                    width: 783,
                    height: 783
                },
                {
                    url: "SPRITE/MIX/rubl4Ss/down_sprite_sheet.png",
                    frames: 13,
                    width: 748,
                    height: 748
                },
                {
                    url: "SPRITE/MIX/rubl4Ss/up_sprite_sheet.png",
                    frames: 13,
                    width: 813,
                    height: 813
                },
                {
                    url: "SPRITE/MIX/rubl4Ss/right_sprite_sheet.png",
                    frames: 5,
                    width: 778,
                    height: 778
                },
                {
                    url: "SPRITE/MIX/rubl4Ss/idle_sprite_sheet.png",
                    frames: 14,
                    width: 776,
                    height: 776
                },
                {
                    url: "SPRITE/MIX/rubl4Ss/idle_sprite_sheet.png",
                    frames: 14,
                    width: 776,
                    height: 776
                }
            ],
            rublonji: [
                {
                    url: "SPRITE/MIX/rublonji/left_sprite_sheet.png",
                    frames: 8,
                    width: 792,
                    height: 792
                },
                {
                    url: "SPRITE/MIX/rublonji/down_sprite_sheet.png",
                    frames: 8,
                    width: 724,
                    height: 724
                },
                {
                    url: "SPRITE/MIX/rublonji/up_sprite_sheet.png",
                    frames: 8,
                    width: 824,
                    height: 824
                },
                {
                    url: "SPRITE/MIX/rublonji/right_sprite_sheet.png",
                    frames: 8,
                    width: 806,
                    height: 806
                },
                {
                    url: "SPRITE/MIX/rublonji/idle_sprite_sheet.png",
                    frames: 15,
                    width: 788,
                    height: 788
                },
                {
                    url: "SPRITE/MIX/rublonji/idle_sprite_sheet.png",
                    frames: 15,
                    width: 788,
                    height: 788
                }
            ],
            RUBlonji_v2: [
                {
                    url: "SPRITE/MIX/RUBlonji_v2/left_sprite_sheet.png",
                    frames: 24,
                    width: 796,
                    height: 796
                },
                {
                    url: "SPRITE/MIX/RUBlonji_v2/down_sprite_sheet.png",
                    frames: 16,
                    width: 738,
                    height: 738
                },
                {
                    url: "SPRITE/MIX/RUBlonji_v2/up_sprite_sheet.png",
                    frames: 16,
                    width: 823,
                    height: 823
                },
                {
                    url: "SPRITE/MIX/RUBlonji_v2/right_sprite_sheet.png",
                    frames: 12,
                    width: 785,
                    height: 785
                },
                {
                    url: "SPRITE/MIX/RUBlonji_v2/idle_sprite_sheet.png",
                    frames: 10,
                    width: 804,
                    height: 804
                },
                {
                    url: "SPRITE/MIX/RUBlonji_v2/idle_sprite_sheet.png",
                    frames: 10,
                    width: 804,
                    height: 804
                }
            ],
            ruv_sheet: [
                {
                    url: "SPRITE/MIX/ruv_sheet/left_sprite_sheet.png",
                    frames: 24,
                    width: 732,
                    height: 732
                },
                {
                    url: "SPRITE/MIX/ruv_sheet/down_sprite_sheet.png",
                    frames: 24,
                    width: 786,
                    height: 786
                },
                {
                    url: "SPRITE/MIX/ruv_sheet/up_sprite_sheet.png",
                    frames: 24,
                    width: 786,
                    height: 786
                },
                {
                    url: "SPRITE/MIX/ruv_sheet/right_sprite_sheet.png",
                    frames: 24,
                    width: 788,
                    height: 788
                },
                {
                    url: "SPRITE/MIX/ruv_sheet/idle_sprite_sheet.png",
                    frames: 15,
                    width: 829,
                    height: 829
                },
                {
                    url: "SPRITE/MIX/ruv_sheet/idle_sprite_sheet.png",
                    frames: 15,
                    width: 829,
                    height: 829
                }
            ],
            sarvente_dark: [
                {
                    url: "SPRITE/MIX/sarvente_dark/left_sprite_sheet.png",
                    frames: 48,
                    width: 758,
                    height: 758
                },
                {
                    url: "SPRITE/MIX/sarvente_dark/down_sprite_sheet.png",
                    frames: 72,
                    width: 730,
                    height: 730
                },
                {
                    url: "SPRITE/MIX/sarvente_dark/up_sprite_sheet.png",
                    frames: 96,
                    width: 767,
                    height: 767
                },
                {
                    url: "SPRITE/MIX/sarvente_dark/right_sprite_sheet.png",
                    frames: 72,
                    width: 759,
                    height: 759
                },
                {
                    url: "SPRITE/MIX/sarvente_dark/idle_sprite_sheet.png",
                    frames: 16,
                    width: 764,
                    height: 764
                },
                {
                    url: "SPRITE/MIX/sarvente_dark/idle_sprite_sheet.png",
                    frames: 16,
                    width: 764,
                    height: 764
                }
            ],
            sarvente_sheet: [
                {
                    url: "SPRITE/MIX/sarvente_sheet/left_sprite_sheet.png",
                    frames: 24,
                    width: 758,
                    height: 758
                },
                {
                    url: "SPRITE/MIX/sarvente_sheet/down_sprite_sheet.png",
                    frames: 48,
                    width: 730,
                    height: 730
                },
                {
                    url: "SPRITE/MIX/sarvente_sheet/up_sprite_sheet.png",
                    frames: 48,
                    width: 757,
                    height: 757
                },
                {
                    url: "SPRITE/MIX/sarvente_sheet/right_sprite_sheet.png",
                    frames: 24,
                    width: 758,
                    height: 758
                },
                {
                    url: "SPRITE/MIX/sarvente_sheet/idle_sprite_sheet.png",
                    frames: 14,
                    width: 764,
                    height: 764
                },
                {
                    url: "SPRITE/MIX/sarvente_sheet/idle_sprite_sheet.png",
                    frames: 14,
                    width: 764,
                    height: 764
                }
            ],
            smokinhotbabe: [
                {
                    url: "SPRITE/MIX/smokinhotbabe/left_sprite_sheet.png",
                    frames: 24,
                    width: 792,
                    height: 792
                },
                {
                    url: "SPRITE/MIX/smokinhotbabe/down_sprite_sheet.png",
                    frames: 24,
                    width: 763,
                    height: 763
                },
                {
                    url: "SPRITE/MIX/smokinhotbabe/up_sprite_sheet.png",
                    frames: 48,
                    width: 793,
                    height: 793
                },
                {
                    url: "SPRITE/MIX/smokinhotbabe/right_sprite_sheet.png",
                    frames: 48,
                    width: 763,
                    height: 763
                },
                {
                    url: "SPRITE/MIX/smokinhotbabe/idle_sprite_sheet.png",
                    frames: 16,
                    width: 845,
                    height: 845
                },
                {
                    url: "SPRITE/MIX/smokinhotbabe/idle_sprite_sheet.png",
                    frames: 16,
                    width: 845,
                    height: 845
                }
            ],
            Speedz: [
                {
                    url: "SPRITE/MIX/Speedz/left_sprite_sheet.png",
                    frames: 15,
                    width: 655,
                    height: 655
                },
                {
                    url: "SPRITE/MIX/Speedz/down_sprite_sheet.png",
                    frames: 15,
                    width: 542,
                    height: 542
                },
                {
                    url: "SPRITE/MIX/Speedz/up_sprite_sheet.png",
                    frames: 15,
                    width: 801,
                    height: 801
                },
                {
                    url: "SPRITE/MIX/Speedz/right_sprite_sheet.png",
                    frames: 15,
                    width: 576,
                    height: 576
                },
                {
                    url: "SPRITE/MIX/Speedz/idle_sprite_sheet.png",
                    frames: 14,
                    width: 790,
                    height: 790
                },
                {
                    url: "SPRITE/MIX/Speedz/idle_sprite_sheet.png",
                    frames: 14,
                    width: 790,
                    height: 790
                }
            ],
            sticky: [
                {
                    url: "SPRITE/MIX/sticky/left_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/sticky/down_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/sticky/up_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/sticky/right_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/sticky/idle_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                },
                {
                    url: "SPRITE/MIX/sticky/idle_sprite_sheet.png",
                    frames: 16,
                    width: 810,
                    height: 810
                }
            ],
            sticky2w: [
                {
                    url: "SPRITE/MIX/sticky2w/left_sprite_sheet.png",
                    frames: 8,
                    width: 931,
                    height: 931
                },
                {
                    url: "SPRITE/MIX/sticky2w/down_sprite_sheet.png",
                    frames: 8,
                    width: 895,
                    height: 895
                },
                {
                    url: "SPRITE/MIX/sticky2w/up_sprite_sheet.png",
                    frames: 8,
                    width: 999,
                    height: 999
                },
                {
                    url: "SPRITE/MIX/sticky2w/right_sprite_sheet.png",
                    frames: 8,
                    width: 949,
                    height: 949
                },
                {
                    url: "SPRITE/MIX/sticky2w/idle_sprite_sheet.png",
                    frames: 8,
                    width: 951,
                    height: 951
                },
                {
                    url: "SPRITE/MIX/sticky2w/idle_sprite_sheet.png",
                    frames: 8,
                    width: 951,
                    height: 951
                }
            ],
            stickypussyw: [
                {
                    url: "SPRITE/MIX/stickypussyw/left_sprite_sheet.png",
                    frames: 8,
                    width: 901,
                    height: 901
                },
                {
                    url: "SPRITE/MIX/stickypussyw/down_sprite_sheet.png",
                    frames: 8,
                    width: 760,
                    height: 760
                },
                {
                    url: "SPRITE/MIX/stickypussyw/up_sprite_sheet.png",
                    frames: 8,
                    width: 967,
                    height: 967
                },
                {
                    url: "SPRITE/MIX/stickypussyw/right_sprite_sheet.png",
                    frames: 8,
                    width: 894,
                    height: 894
                },
                {
                    url: "SPRITE/MIX/stickypussyw/idle_sprite_sheet.png",
                    frames: 8,
                    width: 936,
                    height: 936
                },
                {
                    url: "SPRITE/MIX/stickypussyw/idle_sprite_sheet.png",
                    frames: 8,
                    width: 936,
                    height: 936
                }
            ],
            susie: [
                {
                    url: "SPRITE/MIX/susie/left_sprite_sheet.png",
                    frames: 14,
                    width: 767,
                    height: 767
                },
                {
                    url: "SPRITE/MIX/susie/down_sprite_sheet.png",
                    frames: 14,
                    width: 636,
                    height: 636
                },
                {
                    url: "SPRITE/MIX/susie/up_sprite_sheet.png",
                    frames: 14,
                    width: 780,
                    height: 780
                }
            ],
            sway: [
                {
                    url: "SPRITE/MIX/sway/left_sprite_sheet.png",
                    frames: 5,
                    width: 844,
                    height: 844
                },
                {
                    url: "SPRITE/MIX/sway/down_sprite_sheet.png",
                    frames: 5,
                    width: 790,
                    height: 790
                },
                {
                    url: "SPRITE/MIX/sway/up_sprite_sheet.png",
                    frames: 5,
                    width: 869,
                    height: 869
                },
                {
                    url: "SPRITE/MIX/sway/right_sprite_sheet.png",
                    frames: 5,
                    width: 841,
                    height: 841
                },
                {
                    url: "SPRITE/MIX/sway/idle_sprite_sheet.png",
                    frames: 9,
                    width: 839,
                    height: 839
                },
                {
                    url: "SPRITE/MIX/sway/idle_sprite_sheet.png",
                    frames: 9,
                    width: 839,
                    height: 839
                }
            ],
            TABI: [
                {
                    url: "SPRITE/MIX/TABI/left_sprite_sheet.png",
                    frames: 14,
                    width: 859,
                    height: 859
                },
                {
                    url: "SPRITE/MIX/TABI/down_sprite_sheet.png",
                    frames: 14,
                    width: 860,
                    height: 860
                },
                {
                    url: "SPRITE/MIX/TABI/up_sprite_sheet.png",
                    frames: 14,
                    width: 873,
                    height: 873
                },
                {
                    url: "SPRITE/MIX/TABI/right_sprite_sheet.png",
                    frames: 14,
                    width: 855,
                    height: 855
                },
                {
                    url: "SPRITE/MIX/TABI/idle_sprite_sheet.png",
                    frames: 14,
                    width: 856,
                    height: 856
                },
                {
                    url: "SPRITE/MIX/TABI/idle_sprite_sheet.png",
                    frames: 14,
                    width: 856,
                    height: 856
                }
            ],
            tea: [
                {
                    url: "SPRITE/MIX/tea/left_sprite_sheet.png",
                    frames: 6,
                    width: 1074,
                    height: 1074
                },
                {
                    url: "SPRITE/MIX/tea/down_sprite_sheet.png",
                    frames: 6,
                    width: 991,
                    height: 991
                },
                {
                    url: "SPRITE/MIX/tea/up_sprite_sheet.png",
                    frames: 6,
                    width: 1048,
                    height: 1048
                },
                {
                    url: "SPRITE/MIX/tea/right_sprite_sheet.png",
                    frames: 6,
                    width: 1032,
                    height: 1032
                },
                {
                    url: "SPRITE/MIX/tea/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1066,
                    height: 1066
                },
                {
                    url: "SPRITE/MIX/tea/idle_sprite_sheet.png",
                    frames: 14,
                    width: 1066,
                    height: 1066
                }
            ],
            teaguitar: [
                {
                    url: "SPRITE/MIX/teaguitar/left_sprite_sheet.png",
                    frames: 14,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/teaguitar/down_sprite_sheet.png",
                    frames: 13,
                    width: 553,
                    height: 553
                },
                {
                    url: "SPRITE/MIX/teaguitar/up_sprite_sheet.png",
                    frames: 14,
                    width: 619,
                    height: 619
                },
                {
                    url: "SPRITE/MIX/teaguitar/right_sprite_sheet.png",
                    frames: 15,
                    width: 587,
                    height: 587
                },
                {
                    url: "SPRITE/MIX/teaguitar/idle_sprite_sheet.png",
                    frames: 14,
                    width: 588,
                    height: 588
                },
                {
                    url: "SPRITE/MIX/teaguitar/idle_sprite_sheet.png",
                    frames: 14,
                    width: 588,
                    height: 588
                }
            ],
            TomAssets: [
                {
                    url: "SPRITE/MIX/TomAssets/left_sprite_sheet.png",
                    frames: 28,
                    width: 694,
                    height: 694
                },
                {
                    url: "SPRITE/MIX/TomAssets/down_sprite_sheet.png",
                    frames: 28,
                    width: 623,
                    height: 623
                },
                {
                    url: "SPRITE/MIX/TomAssets/up_sprite_sheet.png",
                    frames: 60,
                    width: 754,
                    height: 754
                },
                {
                    url: "SPRITE/MIX/TomAssets/right_sprite_sheet.png",
                    frames: 28,
                    width: 695,
                    height: 695
                },
                {
                    url: "SPRITE/MIX/TomAssets/idle_sprite_sheet.png",
                    frames: 28,
                    width: 694,
                    height: 694
                },
                {
                    url: "SPRITE/MIX/TomAssets/idle_sprite_sheet.png",
                    frames: 28,
                    width: 694,
                    height: 694
                }
            ],
            tom: [
                {
                    url: "SPRITE/MIX/tom/left_sprite_sheet.png",
                    frames: 6,
                    width: 823,
                    height: 823
                },
                {
                    url: "SPRITE/MIX/tom/down_sprite_sheet.png",
                    frames: 6,
                    width: 782,
                    height: 782
                },
                {
                    url: "SPRITE/MIX/tom/up_sprite_sheet.png",
                    frames: 6,
                    width: 858,
                    height: 858
                },
                {
                    url: "SPRITE/MIX/tom/right_sprite_sheet.png",
                    frames: 6,
                    width: 775,
                    height: 775
                },
                {
                    url: "SPRITE/MIX/tom/idle_sprite_sheet.png",
                    frames: 14,
                    width: 829,
                    height: 829
                },
                {
                    url: "SPRITE/MIX/tom/idle_sprite_sheet.png",
                    frames: 14,
                    width: 829,
                    height: 829
                }
            ],
            tomSusanAssets: [
                {
                    url: "SPRITE/MIX/tomSusanAssets/left_sprite_sheet.png",
                    frames: 14,
                    width: 672,
                    height: 672
                },
                {
                    url: "SPRITE/MIX/tomSusanAssets/down_sprite_sheet.png",
                    frames: 14,
                    width: 531,
                    height: 531
                },
                {
                    url: "SPRITE/MIX/tomSusanAssets/up_sprite_sheet.png",
                    frames: 14,
                    width: 754,
                    height: 754
                },
                {
                    url: "SPRITE/MIX/tomSusanAssets/right_sprite_sheet.png",
                    frames: 14,
                    width: 695,
                    height: 695
                },
                {
                    url: "SPRITE/MIX/tomSusanAssets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 692,
                    height: 692
                },
                {
                    url: "SPRITE/MIX/tomSusanAssets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 692,
                    height: 692
                }
            ],
            trials2: [
                {
                    url: "SPRITE/MIX/trials2/left_sprite_sheet.png",
                    frames: 8,
                    width: 949,
                    height: 949
                },
                {
                    url: "SPRITE/MIX/trials2/down_sprite_sheet.png",
                    frames: 8,
                    width: 794,
                    height: 794
                },
                {
                    url: "SPRITE/MIX/trials2/up_sprite_sheet.png",
                    frames: 8,
                    width: 1080,
                    height: 1080
                },
                {
                    url: "SPRITE/MIX/trials2/right_sprite_sheet.png",
                    frames: 8,
                    width: 961,
                    height: 961
                },
                {
                    url: "SPRITE/MIX/trials2/idle_sprite_sheet.png",
                    frames: 8,
                    width: 1005,
                    height: 1005
                },
                {
                    url: "SPRITE/MIX/trials2/idle_sprite_sheet.png",
                    frames: 8,
                    width: 1005,
                    height: 1005
                }
            ],
            uwu: [
                {
                    url: "SPRITE/MIX/uwu/left_sprite_sheet.png",
                    frames: 14,
                    width: 838,
                    height: 838
                },
                {
                    url: "SPRITE/MIX/uwu/down_sprite_sheet.png",
                    frames: 16,
                    width: 716,
                    height: 716
                },
                {
                    url: "SPRITE/MIX/uwu/up_sprite_sheet.png",
                    frames: 16,
                    width: 862,
                    height: 862
                },
                {
                    url: "SPRITE/MIX/uwu/right_sprite_sheet.png",
                    frames: 16,
                    width: 843,
                    height: 843
                },
                {
                    url: "SPRITE/MIX/uwu/idle_sprite_sheet.png",
                    frames: 16,
                    width: 822,
                    height: 822
                },
                {
                    url: "SPRITE/MIX/uwu/idle_sprite_sheet.png",
                    frames: 16,
                    width: 822,
                    height: 822
                }
            ],
            Verm_Assets: [
                {
                    url: "SPRITE/MIX/Verm_Assets/left_sprite_sheet.png",
                    frames: 14,
                    width: 674,
                    height: 674
                },
                {
                    url: "SPRITE/MIX/Verm_Assets/down_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets/up_sprite_sheet.png",
                    frames: 14,
                    width: 686,
                    height: 686
                },
                {
                    url: "SPRITE/MIX/Verm_Assets/right_sprite_sheet.png",
                    frames: 14,
                    width: 666,
                    height: 666
                },
                {
                    url: "SPRITE/MIX/Verm_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                }
            ],
            Verm_Assets_lyc1: [
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/left_sprite_sheet.png",
                    frames: 14,
                    width: 674,
                    height: 674
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/down_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/up_sprite_sheet.png",
                    frames: 14,
                    width: 686,
                    height: 686
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/right_sprite_sheet.png",
                    frames: 14,
                    width: 666,
                    height: 666
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc1/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                }
            ],
            Verm_Assets_lyc2: [
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/left_sprite_sheet.png",
                    frames: 14,
                    width: 674,
                    height: 674
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/down_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/up_sprite_sheet.png",
                    frames: 14,
                    width: 686,
                    height: 686
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/right_sprite_sheet.png",
                    frames: 14,
                    width: 666,
                    height: 666
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                },
                {
                    url: "SPRITE/MIX/Verm_Assets_lyc2/idle_sprite_sheet.png",
                    frames: 14,
                    width: 667,
                    height: 667
                }
            ],
            Xmas_BF: [
                {
                    url: "SPRITE/MIX/Xmas_BF/left_sprite_sheet.png",
                    frames: 23,
                    width: 600,
                    height: 600
                },
                {
                    url: "SPRITE/MIX/Xmas_BF/down_sprite_sheet.png",
                    frames: 24,
                    width: 600,
                    height: 600
                },
                {
                    url: "SPRITE/MIX/Xmas_BF/up_sprite_sheet.png",
                    frames: 23,
                    width: 600,
                    height: 600
                },
                {
                    url: "SPRITE/MIX/Xmas_BF/right_sprite_sheet.png",
                    frames: 24,
                    width: 600,
                    height: 600
                },
                {
                    url: "SPRITE/MIX/Xmas_BF/idle_sprite_sheet.png",
                    frames: 14,
                    width: 600,
                    height: 600
                },
                {
                    url: "SPRITE/MIX/Xmas_BF/idle_sprite_sheet.png",
                    frames: 14,
                    width: 600,
                    height: 600
                }
            ],
            Xmas_Danke: [
                {
                    url: "SPRITE/MIX/Xmas_Danke/left_sprite_sheet.png",
                    frames: 24,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/Xmas_Danke/down_sprite_sheet.png",
                    frames: 24,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/Xmas_Danke/up_sprite_sheet.png",
                    frames: 24,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/Xmas_Danke/right_sprite_sheet.png",
                    frames: 24,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/Xmas_Danke/idle_sprite_sheet.png",
                    frames: 14,
                    width: 590,
                    height: 590
                },
                {
                    url: "SPRITE/MIX/Xmas_Danke/idle_sprite_sheet.png",
                    frames: 14,
                    width: 590,
                    height: 590
                }
            ],
            zibidi: [
                {
                    url: "SPRITE/MIX/zibidi/left_sprite_sheet.png",
                    frames: 6,
                    width: 1009,
                    height: 1009
                },
                {
                    url: "SPRITE/MIX/zibidi/down_sprite_sheet.png",
                    frames: 6,
                    width: 847,
                    height: 847
                },
                {
                    url: "SPRITE/MIX/zibidi/up_sprite_sheet.png",
                    frames: 5,
                    width: 1029,
                    height: 1029
                },
                {
                    url: "SPRITE/MIX/zibidi/right_sprite_sheet.png",
                    frames: 7,
                    width: 858,
                    height: 858
                },
                {
                    url: "SPRITE/MIX/zibidi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 524,
                    height: 524
                },
                {
                    url: "SPRITE/MIX/zibidi/idle_sprite_sheet.png",
                    frames: 14,
                    width: 524,
                    height: 524
                }
            ],
            alex_new: [
                {
                    url: "SPRITE/MIX/alex-new/left_sprite_sheet.png",
                    frames: 5,
                    width: 818,
                    height: 818
                },
                {
                    url: "SPRITE/MIX/alex-new/down_sprite_sheet.png",
                    frames: 5,
                    width: 772,
                    height: 772
                },
                {
                    url: "SPRITE/MIX/alex-new/up_sprite_sheet.png",
                    frames: 5,
                    width: 864,
                    height: 864
                },
                {
                    url: "SPRITE/MIX/alex-new/right_sprite_sheet.png",
                    frames: 5,
                    width: 808,
                    height: 808
                },
                {
                    url: "SPRITE/MIX/alex-new/idle_sprite_sheet.png",
                    frames: 14,
                    width: 805,
                    height: 805
                },
                {
                    url: "SPRITE/MIX/alex-new/idle_sprite_sheet.png",
                    frames: 14,
                    width: 805,
                    height: 805
                }
            ],
            amalgamat: [
                {
                    url: "SPRITE/MIX/amalgamat/left_sprite_sheet.png",
                    frames: 60,
                    width: 875,
                    height: 875
                },
                {
                    url: "SPRITE/MIX/amalgamat/down_sprite_sheet.png",
                    frames: 60,
                    width: 858,
                    height: 858
                },
                {
                    url: "SPRITE/MIX/amalgamat/up_sprite_sheet.png",
                    frames: 60,
                    width: 902,
                    height: 902
                },
                {
                    url: "SPRITE/MIX/amalgamat/right_sprite_sheet.png",
                    frames: 60,
                    width: 884,
                    height: 884
                },
                {
                    url: "SPRITE/MIX/amalgamat/idle_sprite_sheet.png",
                    frames: 14,
                    width: 884,
                    height: 884
                },
                {
                    url: "SPRITE/MIX/amalgamat/idle_sprite_sheet.png",
                    frames: 14,
                    width: 884,
                    height: 884
                }
            ],
            boy_5_rubles: [
                {
                    url: "SPRITE/MIX/boy_5_rubles/left_sprite_sheet.png",
                    frames: 24,
                    width: 340,
                    height: 340
                },
                {
                    url: "SPRITE/MIX/boy_5_rubles/down_sprite_sheet.png",
                    frames: 24,
                    width: 311,
                    height: 311
                },
                {
                    url: "SPRITE/MIX/boy_5_rubles/up_sprite_sheet.png",
                    frames: 24,
                    width: 354,
                    height: 354
                },
                {
                    url: "SPRITE/MIX/boy_5_rubles/right_sprite_sheet.png",
                    frames: 24,
                    width: 336,
                    height: 336
                },
                {
                    url: "SPRITE/MIX/boy_5_rubles/idle_sprite_sheet.png",
                    frames: 15,
                    width: 329,
                    height: 329
                },
                {
                    url: "SPRITE/MIX/boy_5_rubles/idle_sprite_sheet.png",
                    frames: 15,
                    width: 329,
                    height: 329
                }
            ],
            LOSTEL: [
                {
                    url: "SPRITE/MIX/LOSTEL/left_sprite_sheet.png",
                    frames: 14,
                    width: 529,
                    height: 529
                },
                {
                    url: "SPRITE/MIX/LOSTEL/down_sprite_sheet.png",
                    frames: 14,
                    width: 401,
                    height: 401
                },
                {
                    url: "SPRITE/MIX/LOSTEL/up_sprite_sheet.png",
                    frames: 14,
                    width: 608,
                    height: 608
                },
                {
                    url: "SPRITE/MIX/LOSTEL/right_sprite_sheet.png",
                    frames: 14,
                    width: 543,
                    height: 543
                },
                {
                    url: "SPRITE/MIX/LOSTEL/idle_sprite_sheet.png",
                    frames: 14,
                    width: 545,
                    height: 545
                },
                {
                    url: "SPRITE/MIX/LOSTEL/idle_sprite_sheet.png",
                    frames: 14,
                    width: 545,
                    height: 545
                }
            ],
            ApoloT: [
                {
                    url: "SPRITE/MIX/ApoloT/left_sprite_sheet.png",
                    frames: 5,
                    width: 876,
                    height: 876
                },
                {
                    url: "SPRITE/MIX/ApoloT/down_sprite_sheet.png",
                    frames: 5,
                    width: 876,
                    height: 876
                },
                {
                    url: "SPRITE/MIX/ApoloT/up_sprite_sheet.png",
                    frames: 5,
                    width: 876,
                    height: 876
                },
                {
                    url: "SPRITE/MIX/ApoloT/right_sprite_sheet.png",
                    frames: 5,
                    width: 876,
                    height: 876
                },
                {
                    url: "SPRITE/MIX/ApoloT/idle_sprite_sheet.png",
                    frames: 10,
                    width: 876,
                    height: 876
                },
                {
                    url: "SPRITE/MIX/ApoloT/idle_sprite_sheet.png",
                    frames: 10,
                    width: 876,
                    height: 876
                }
            ],
            AthenaR: [
                {
                    url: "SPRITE/MIX/AthenaR/left_sprite_sheet.png",
                    frames: 5,
                    width: 940,
                    height: 940
                },
                {
                    url: "SPRITE/MIX/AthenaR/down_sprite_sheet.png",
                    frames: 5,
                    width: 940,
                    height: 940
                },
                {
                    url: "SPRITE/MIX/AthenaR/up_sprite_sheet.png",
                    frames: 5,
                    width: 940,
                    height: 940
                },
                {
                    url: "SPRITE/MIX/AthenaR/right_sprite_sheet.png",
                    frames: 5,
                    width: 940,
                    height: 940
                },
                {
                    url: "SPRITE/MIX/AthenaR/idle_sprite_sheet.png",
                    frames: 10,
                    width: 940,
                    height: 940
                },
                {
                    url: "SPRITE/MIX/AthenaR/idle_sprite_sheet.png",
                    frames: 10,
                    width: 940,
                    height: 940
                }
            ],
            ether: [
                {
                    url: "SPRITE/MIX/ether/left_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/ether/down_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/ether/up_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/ether/right_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/ether/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/ether/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                }
            ],
            etherR: [
                {
                    url: "SPRITE/MIX/etherR/left_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/etherR/down_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/etherR/up_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/etherR/right_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/etherR/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/etherR/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                }
            ],
            goth: [
                {
                    url: "SPRITE/MIX/goth/left_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/goth/down_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/goth/up_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/goth/right_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/goth/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/goth/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                }
            ],
            GothOLD: [
                {
                    url: "SPRITE/MIX/GothOLD/left_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/GothOLD/down_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/GothOLD/up_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/GothOLD/right_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/GothOLD/idle_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/GothOLD/idle_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                }
            ],
            nickar: [
                {
                    url: "SPRITE/MIX/nickar/left_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/nickar/down_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/nickar/up_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/nickar/right_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/nickar/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/nickar/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                }
            ],
            Vane: [
                {
                    url: "SPRITE/MIX/Vane/left_sprite_sheet.png",
                    frames: 3,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/Vane/down_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/Vane/up_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/Vane/right_sprite_sheet.png",
                    frames: 4,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/Vane/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/Vane/idle_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                }
            ],
            VaneOLD: [
                {
                    url: "SPRITE/MIX/VaneOLD/left_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/VaneOLD/down_sprite_sheet.png",
                    frames: 48,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/VaneOLD/up_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/VaneOLD/right_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/VaneOLD/idle_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                },
                {
                    url: "SPRITE/MIX/VaneOLD/idle_sprite_sheet.png",
                    frames: 24,
                    width: 1200,
                    height: 1200
                }
            ],
            vaneR: [
                {
                    url: "SPRITE/MIX/vaneR/left_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/vaneR/down_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/vaneR/up_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/vaneR/right_sprite_sheet.png",
                    frames: 5,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/vaneR/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                },
                {
                    url: "SPRITE/MIX/vaneR/idle_sprite_sheet.png",
                    frames: 6,
                    width: 923,
                    height: 923
                }
            ]
        }
    }
};

// Set the audio source
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.src = config.paths.music;

const BPM = config.audio.bpm;

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = createScene(engine, canvas);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 600, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Define sprite positions
    
    var D1 = new BABYLON.Vector3(-1, 2.5, 1);
    var D2 = new BABYLON.Vector3(2, 0.5, 0);
    //var D1 = new BABYLON.Vector3(-2, 2.45, -2);
    //var D2 = new BABYLON.Vector3(2, 0.5, -2);

    let currentSpriteSheetIndex1 = 5;
    let currentFrame1 = 0;
    let currentSpriteSheetIndex2 = 5;
    let currentFrame2 = 0;
    
    let isLoadingNextSpriteSheet1 = false;
    let isLoadingNextSpriteSheet2 = false;
    let isAudioStarted = false;
    
    // Get an array of keys from the group object
    const groupKeys = Object.keys(config.sprites.group);
    
    // Function to generate a seeded random number
    function seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    
    async function adjustSpritePosition1(spriteManagers1,currentSpriteSheetIndex1,sprite1) {
        try {
            // Create an offscreen canvas to analyze the sprite transparency
            const spriteTexture = spriteManagers1[currentSpriteSheetIndex1].texture;
            const img = new Image();
            img.src = spriteTexture.url;
    
            await img.decode();
    
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
    
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
    
            // Get pixel data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
    
            let lowestVisibleY = null;
    
            // Iterate from bottom to top to find the first visible (non-transparent) pixel
            for (let y = canvas.height - 1; y >= 0; y--) {
                for (let x = 0; x < canvas.width; x++) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = pixels[index + 3]; // Alpha channel
    
                    if (alpha > 0) { // If not transparent
                        lowestVisibleY = y;
                        break;
                    }
                }
                if (lowestVisibleY !== null) break;
            }
    
            if (lowestVisibleY !== null) {
                // Convert lowest Y pixel to world coordinates
                const spriteHeight = spriteTexture.getBaseSize().height;
                const offsetY = (spriteHeight - lowestVisibleY) / spriteHeight;
    
                // Adjust position to make the non-transparent part touch y = 2.45
                sprite1.position.y = 2.5 - offsetY;
                console.warn('new position',sprite1.position.y)
            }
        } catch (error) {
            console.error("Error adjusting sprite position:", error);
        }
    }
    
    async function adjustSpritePosition2(spriteManagers2,currentSpriteSheetIndex2,sprite2) {
        try {
            // Create an offscreen canvas to analyze the sprite transparency
            const spriteTexture = spriteManagers2[currentSpriteSheetIndex2].texture;
            const img = new Image();
            img.src = spriteTexture.url;
    
            await img.decode();
    
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
    
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
    
            // Get pixel data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
    
            let lowestVisibleY = null;
    
            // Iterate from bottom to top to find the first visible (non-transparent) pixel
            for (let y = canvas.height - 1; y >= 0; y--) {
                for (let x = 0; x < canvas.width; x++) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = pixels[index + 3]; // Alpha channel
    
                    if (alpha > 0) { // If not transparent
                        lowestVisibleY = y;
                        break;
                    }
                }
                if (lowestVisibleY !== null) break;
            }
    
            if (lowestVisibleY !== null) {
                // Convert lowest Y pixel to world coordinates
                const spriteHeight = spriteTexture.getBaseSize().height;
                const offsetY = (spriteHeight - lowestVisibleY) / spriteHeight;
    
                // Adjust position to make the non-transparent part touch y = 2.45
                sprite2.position.y = 0.5 - offsetY;
                console.warn('new position',sprite2.position.y)
            }
        } catch (error) {
            console.error("Error adjusting sprite position:", error);
        }
    }
    
    
    // Function to validate a sprite URL by checking if it exists
    async function isSpriteValid(spriteKey) {
        const basePath = `https://thatguycalledben.com/ThatGuyFunkin/SPRITE/MIX/${spriteKey}`;
        const directions = ['left', 'down', 'up', 'idle', 'right'];
        try {
            for (const direction of directions) {
                const response = await fetch(`${basePath}/${direction}_sprite_sheet.png`, { method: 'HEAD' });
                if (!response.ok) {
                        console.error(`Missing sprite: ${direction}_sprite_sheet for key ${spriteKey}`);
                    return false;
                }
            }
            return true;
        } catch (err) {
            console.error(`Error checking sprites for key ${spriteKey}:`, err);
            return false;
        }
    }
    
    // Function to select a valid vocalist
    async function selectVocalist(seed, maxAttempts = 10, fallbackIndex = 0) {
        let attempts = 0;
        let selectedKey;

        while (attempts < maxAttempts) {
            const randomIndex = Math.floor(seededRandom(seed) * groupKeys.length);
            selectedKey = groupKeys[randomIndex];
            attempts++;
            console.log(`Attempt: ${attempts}, Checking key: ${selectedKey}`);
            seed++; // Increment the seed for the next iteration
    
            if (await isSpriteValid(selectedKey)) {
                console.log(`Valid key found: ${selectedKey}`);
                return selectedKey;
            }
        }
    
        // Fallback to a specific value if no valid selection was found
        console.warn(`No valid sprite found after ${maxAttempts} attempts. Defaulting to index ${fallbackIndex}.`);
        return groupKeys[fallbackIndex];
    }
    
    // Main execution
    (async () => {
        const seed = Date.now(); // Unique seed based on time
        const vocalist = await selectVocalist(seed);
        console.log(`Selected vocalist: ${vocalist}`);
    
    const beatsPerSecond = (BPM/60);
    const beatDuration = (1/beatsPerSecond);
    
    const idleSpeed1 = (config.sprites.group[vocalist][4].frames/beatDuration);
    const idleSpeed2 = (config.sprites.group.tomSusanAssets[4].frames/beatDuration);

    // Call spriteManagers1 function to initialize the sprite managers
    const spriteManagers1 = config.sprites.group[vocalist].map(data => createSpriteManager1(data, scene));

    // Preload sprite managers for a specific character (e.g., tomguitar) within homme
    // configure to choose homme/femme based on config variable
                    // configure to choose char based on random list selection
    const spriteManagers2 = config.sprites.group.tomSusanAssets.map(data => createSpriteManager2(data, scene));
    // configure to choose homme/femme based on config variable
                    // configure to choose char based on random list selection

    let sprite1 = new BABYLON.Sprite("sprite1", spriteManagers1[currentSpriteSheetIndex1]);
    sprite1.position = D1;

    let sprite2 = new BABYLON.Sprite("sprite2", spriteManagers2[currentSpriteSheetIndex2]);
    sprite2.position = D2;

    const audio = document.getElementById("backgroundMusic");
    let danceData1, danceData2;

    // Handle click event to start audio and animations
    canvas.addEventListener("click", function () {
        if (!isAudioStarted) {
            audio.play();
            isAudioStarted = true;

            // Start animation and self-healing check after audio starts
            startAnimation();
            startSelfHealingCheck(true);
            updateSpriteBasedOnTime();
        }
    });

    Promise.all([
        fetch(config.paths.vocals).then(response => response.json()),
        fetch(config.paths.bass).then(response => response.json())
    ])
    .then(([data1, data2]) => {
        danceData1 = validateDanceData(data1);
        danceData2 = validateDanceData(data2);

        if (danceData1.length === 0) {
            console.warn('No valid dance data found for first sprite');
        }

        if (danceData2.length === 0) {
            console.warn('No valid dance data found for second sprite');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    function startAnimation() {
        try {
            let lastTimestamp = 0
            let timestamp = performance.now()
            function animate(timestamp) {
                timestamp = performance.now();
                let elapsed = (audio.currentTime % beatDuration);

                if (!isLoadingNextSpriteSheet1) {
                    if (currentFrame1 >= config.sprites.group[vocalist][currentSpriteSheetIndex1].frames - 1 || (currentFrame1 + (elapsed * (beatsPerSecond))) >= config.sprites.group[vocalist][currentSpriteSheetIndex1].frames - 1) {
                        if (currentSpriteSheetIndex1 == 4 || currentSpriteSheetIndex1 == 5) {
                            //if (currentFrame1 == 0) {sprite1.cellIndex = Math.floor(currentFrame1);
                            //} else {
                            currentFrame1 = (currentFrame1 + (elapsed / config.sprites.group[vocalist][currentSpriteSheetIndex1].frames)) % (config.sprites.group[vocalist][currentSpriteSheetIndex1].frames); sprite1.cellIndex = Math.floor(currentFrame1);
                            //};
                        } else {
                            currentFrame1 = config.sprites.group[vocalist][currentSpriteSheetIndex1].frames - 1;  sprite1.cellIndex = Math.floor(currentFrame1);
                        }
                    } else {
                    currentFrame1 = Math.min(config.sprites.group[vocalist][currentSpriteSheetIndex1].frames - 1, currentFrame1 + (elapsed * (beatsPerSecond)));
                    // configure to choose homme/femme based on config variable
                    // configure to choose char based on random list selection
                    sprite1.cellIndex = Math.floor(currentFrame1);
                    }
                }

                if (!isLoadingNextSpriteSheet2) {
                    if (currentFrame2 >= config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames - 1 || (currentFrame2 + (elapsed * (beatsPerSecond))) >= config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames - 1) {
                        if (currentSpriteSheetIndex2 == 4 || currentSpriteSheetIndex2 == 5) {
                            //if (currentFrame2 == 0) {sprite2.cellIndex = Math.floor(currentFrame2);
                            //} else {
                            currentFrame2 = (currentFrame2 + (elapsed / config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames)) % (config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames ); sprite2.cellIndex = Math.floor(currentFrame2)
                            //};
                        } else {
                            currentFrame2 = config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames - 1; sprite2.cellIndex = Math.floor(currentFrame2)
                        }
                    } else {
                    currentFrame2 = Math.min(config.sprites.group.tomSusanAssets[currentSpriteSheetIndex2].frames - 1, currentFrame2 + (elapsed * (beatsPerSecond)));
                    // configure to choose homme/femme based on config variable
                    // configure to choose char based on random list selection
                    sprite2.cellIndex = Math.floor(currentFrame2);
                    }
                }

                scene.render();
                lastTimestamp = timestamp;
                requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
        } catch (error) {
            console.error('Error starting animation:', error);
        }
    }
    
    //var A = true
    //var B = true

    // async function switchSprite1(newSpriteSheetIndex) {
    //     try {
    //         if (currentSpriteSheetIndex1 === newSpriteSheetIndex) return;

    //         sprite1.dispose();
    //         currentSpriteSheetIndex1 = newSpriteSheetIndex;
    //         sprite1 = new BABYLON.Sprite("sprite1", spriteManagers1[currentSpriteSheetIndex1]);
    //         currentFrame1 = 0
    //         sprite1.cellIndex = currentFrame1;
    //         sprite1.position = D1.clone();
    //         const displacement = new BABYLON.Vector3(
    //             0,
    //             currentSpriteSheetIndex1 === 1 ? -0.01 : currentSpriteSheetIndex1 === 2 ? 0.01 : 0, // Down (-1) or Up (+1)
    //             0
    //         );
    //         sprite1.position.addInPlace(displacement);
    //         //if (A === true) {await adjustSpritePosition1(spriteManagers1,4,sprite1); A = false}
    //     } catch (error) {
    //         console.error('Error in switchSprite1:', error);
    //     }
    // }

    // async function switchSprite2(newSpriteSheetIndex) {
    //     try {
    //         if (currentSpriteSheetIndex2 === newSpriteSheetIndex) return;

    //         sprite2.dispose();
    //         currentSpriteSheetIndex2 = newSpriteSheetIndex;
    //         sprite2 = new BABYLON.Sprite("sprite2", spriteManagers2[currentSpriteSheetIndex2]);
    //         currentFrame2 = 0
    //         sprite2.cellIndex = currentFrame2;
    //         sprite2.position = D2.clone();
    //         const displacement = new BABYLON.Vector3(
    //             0,
    //             currentSpriteSheetIndex2 === 1 ? -0.01 : currentSpriteSheetIndex2 === 2 ? 0.01 : 0, // Down (-1) or Up (+1)
    //             0
    //         );
    //         sprite2.position.addInPlace(displacement);
    //         //if (B === true) {await adjustSpritePosition2(spriteManagers2,4,sprite2); B = false}
    //     } catch (error) {
    //         console.error('Error in switchSprite2:', error);
    //     }
    // }
    
    // //(entry.t >= t0 + l1 && currentTime <= entry.t && entry.l % 1000*beatDuration/32 <= 1000*beatDuration*(1/64) && (entry.d != d1a || entry.d != d1b))
    // //(entry.t >= t0 + l2 && currentTime <= entry.t && entry.l % 1000*beatDuration/32 <= 1000*beatDuration*(1/64) && (entry.d != d2a || entry.d != d2b))
    // //entry.t - t0 >= l1
    // //entry.t - t0 >= l2
    
    // //(currentTime <= entry.t && (currentTime % (1000*beatDuration)*(1/8) <= (1000*beatDuration)*(1/16) || currentTime % (1000*beatDuration)*(1/8) >= (1000*beatDuration)*(15/16)))
    // //currentTime <= entry.t + entry.l
    // //currentTime <= entry.t && (entry.t - currentTime) >= 1000*beatDuration/64
    
    
    // var startup = true
    // async function updateSpriteBasedOnTime() {
    //     try {
    //         const currentTime = Math.max(0,performance.now());
    //         let l1 = 0
    //         let l2 = 0
    //         let t0 = currentTime
    //         let d1a
    //         let d1b
    //         let d2a
    //         let d2b
    //         if (!danceData1 || !isAudioStarted) return;
    //         if (startup === true) {
    //             await adjustSpritePosition1(spriteManagers1,4,sprite1);
    //             await adjustSpritePosition2(spriteManagers2,4,sprite2);
    //             startup = false
    //         }
    //         for (let entry of danceData1) {
    //             if (currentTime <= entry.t + entry.l) {
    //                 t0 = currentTime
    //                 d1b = d1a
    //                 d1a = entry.d
    //                 l1 = entry.l
    //                 switchSprite1(entry.d);
    //                 break;
    //             }
    //         }

    //         for (let entry of danceData2) {
    //             if (currentTime <= entry.t + entry.l) {
    //                 d2b = d2a
    //                 d2a = entry.d
    //                 t0 = currentTime
    //                 l2 = entry.l
    //                 switchSprite2(entry.d);
    //                 break;
    //             }
    //         }

    //         setTimeout(updateSpriteBasedOnTime, 0);
    //     } catch (error) {
    //         console.error('Error in updateSpriteBasedOnTime:', error);
    //     }
    // }

    // function validateDanceData(data) {
    //     try {
    //         if (!Array.isArray(data)) {
    //             throw new Error('Dance data is not an array');
    //         }

    //         const validatedData = data.filter(entry => {
    //             if (!entry || typeof entry !== 'object') {
    //                 console.warn('Invalid entry in dance data:', entry);
    //                 return false;
    //             }
    //             if (typeof entry.t !== 'number' || typeof entry.d !== 'number' || typeof entry.l !== 'number') {
    //                 console.warn('Invalid data type in entry:', entry);
    //                 return false;
    //             }
    //             return true;
    //         });

    //         if (validatedData.length !== data.length) {
    //             console.warn('Some entries in dance data were invalid');
    //         }

    //         return validatedData;
    //     } catch (error) {
    //         console.error('Error in validateDanceData:', error);
    //         return [];
    //     }
    // }
    
    function switchSprite1(newSpriteSheetIndex, offsetX = 0, offsetY = 0) {
        try {
            if (currentSpriteSheetIndex1 === newSpriteSheetIndex && sprite1) {
                // Same sheet → just update position + offsets
                sprite1.position = D1.clone();
    
                // Base displacement (up/down emphasis)
                const displacement = new BABYLON.Vector3(
                    0,
                    currentSpriteSheetIndex1 === 1 ? -0.01 : currentSpriteSheetIndex1 === 2 ? 0.01 : 0,
                    0
                );
                sprite1.position.addInPlace(displacement);
    
                // Micro-motion offsets (breathing / jitter)
                sprite1.position.addInPlace(new BABYLON.Vector3(offsetX, offsetY, 0));
                return;
            }
    
            // Switching to a new spritesheet → dispose and recreate
            if (sprite1) sprite1.dispose();
            currentSpriteSheetIndex1 = newSpriteSheetIndex;
            sprite1 = new BABYLON.Sprite("sprite1", spriteManagers1[currentSpriteSheetIndex1]);
            currentFrame1 = 0;
            sprite1.cellIndex = currentFrame1;
    
            // Reset to base position
            sprite1.position = D1.clone();
    
            // Base displacement (up/down emphasis)
            const displacement = new BABYLON.Vector3(
                0,
                currentSpriteSheetIndex1 === 1 ? -0.01 : currentSpriteSheetIndex1 === 2 ? 0.01 : 0,
                0
            );
            sprite1.position.addInPlace(displacement);
    
            // Micro-motion offsets (breathing / jitter)
            sprite1.position.addInPlace(new BABYLON.Vector3(offsetX, offsetY, 0));
    
        } catch (error) {
            console.error('Error in switchSprite1:', error);
        }
    }


    function switchSprite2(newSpriteSheetIndex, offsetX = 0, offsetY = 0) {
        try {
            if (currentSpriteSheetIndex2 === newSpriteSheetIndex && sprite2) {
                // Just update position with micro-offset if already same sprite
                sprite2.position = D2.clone();
    
                // Base displacement (up/down emphasis)
                const displacement = new BABYLON.Vector3(
                    0,
                    currentSpriteSheetIndex2 === 1 ? -0.01 : currentSpriteSheetIndex2 === 2 ? 0.01 : 0,
                    0
                );
                sprite2.position.addInPlace(displacement);
    
                // Micro-motion offsets (breathing / jitter)
                sprite2.position.addInPlace(new BABYLON.Vector3(offsetX, offsetY, 0));
                return;
            }
    
            // Dispose and replace sprite if switching to a new spritesheet
            if (sprite2) sprite2.dispose();
            currentSpriteSheetIndex2 = newSpriteSheetIndex;
            sprite2 = new BABYLON.Sprite("sprite2", spriteManagers2[currentSpriteSheetIndex2]);
            currentFrame2 = 0;
            sprite2.cellIndex = currentFrame2;
    
                // Reset to base position
            sprite2.position = D2.clone();
    
            // Base displacement (up/down emphasis)
            const displacement = new BABYLON.Vector3(
                    0,
                currentSpriteSheetIndex2 === 1 ? -0.01 : currentSpriteSheetIndex2 === 2 ? 0.01 : 0,
                    0
            );
            sprite2.position.addInPlace(displacement);
    
            // Micro-motion offsets (breathing / jitter)
            sprite2.position.addInPlace(new BABYLON.Vector3(offsetX, offsetY, 0));
    
        } catch (error) {
            console.error('Error in switchSprite2:', error);
        }
    }
    
    // function updateSpriteBasedOnTime() {
    //     try {
    //         if (!danceData1 || !isAudioStarted) return;
            
    //         let currentTime = Math.max(0,performance.now());
            
    //         for (let entry of danceData1) {
    //             let currentTime = Math.max(0,performance.now());
    //             if (currentTime <= entry.t) {
    //                 switchSprite1(entry.d);
    //                 break;
    //             }
    //         }

    //         for (let entry of danceData2) {
    //             let currentTime = Math.max(0,performance.now());
    //             if (currentTime <= entry.t) {
    //                 switchSprite2(entry.d);
    //                 break;
    //             }
    //         }

    //         setTimeout(updateSpriteBasedOnTime, 0);
    //     } catch (error) {
    //         console.error('Error in updateSpriteBasedOnTime:', error);
    //     }
    // }
    

    // function updateSpriteBasedOnTime() {
    //     try {
    //         if (!danceData1 || !danceData2 || !isAudioStarted) return;
    
    //         // Use a single timestamp reference for both datasets
    //         let currentTime = performance.now();
    
    //         function findNearestEntry(data, time) {
    //             return data.reduce((nearest, entry) => {
    //                 return (Math.abs(entry.t - time) < Math.abs(nearest.t - time))
    //                     ? entry
    //                     : nearest;
    //             });
    //         }
    
    //         let nearest1 = findNearestEntry(danceData1, currentTime);
    //         let nearest2 = findNearestEntry(danceData2, currentTime);
    
    //         if (nearest1) switchSprite1(nearest1.d);
    //         if (nearest2) switchSprite2(nearest2.d);
    
    //         // Schedule next update
    //         setTimeout(updateSpriteBasedOnTime, 0);
    //     } catch (error) {
    //         console.error('Error in updateSpriteBasedOnTime:', error);
    //     }
    // }
    
    // let lastSprite1 = null;
    // let lastSprite2 = null;
    // let lastSwitchTime1 = 0;
    // let lastSwitchTime2 = 0;
    
    // function updateSpriteBasedOnTime() {
    //     try {
    //         if (!danceData1 || !danceData2 || !isAudioStarted) return;
    
    //         let currentTime = performance.now();
    
    //         function findNearestEntry(data, time) {
    //             return data.reduce((nearest, entry) => {
    //                 return (Math.abs(entry.t - time) < Math.abs(nearest.t - time))
    //                     ? entry
    //                     : nearest;
    //             });
    //         }
    
    //         // Tweened switch
    //         function smoothSwitch(entry, lastSprite, lastSwitchTime, switchFn) {
    //             if (!entry) return { lastSprite, lastSwitchTime };
    
    //             let now = performance.now();
    //             const minGap = 80; // ms
    //             if (now - lastSwitchTime < minGap) {
    //                 return { lastSprite, lastSwitchTime };
    //             }
    
    //             if (lastSprite === entry.d) return { lastSprite, lastSwitchTime };
    
    //             // If your spritesheet is organized by numeric frames, we can tween:
    //             let startFrame = lastSprite ?? entry.d;
    //             let endFrame = entry.d;
    
    //             let steps = 3;         // number of in-betweens
    //             let stepTime = 30;     // ms per step
    //             let diff = endFrame - startFrame;
    //             let dir = diff === 0 ? 0 : diff / Math.abs(diff); // +1 or -1 direction
    
    //             for (let i = 1; i <= steps; i++) {
    //                 setTimeout(() => {
    //                     let tweenFrame = startFrame + dir * Math.round((i / steps) * Math.abs(diff));
    //                     switchFn(tweenFrame);
    //                 }, i * stepTime);
    //             }
    
    //             return { lastSprite: entry.d, lastSwitchTime: now };
    //         }
    
    //         let nearest1 = findNearestEntry(danceData1, currentTime);
    //         let nearest2 = findNearestEntry(danceData2, currentTime);
    
    //         ({ lastSprite: lastSprite1, lastSwitchTime: lastSwitchTime1 } =
    //             smoothSwitch(nearest1, lastSprite1, lastSwitchTime1, switchSprite1));
    
    //         ({ lastSprite: lastSprite2, lastSwitchTime: lastSwitchTime2 } =
    //             smoothSwitch(nearest2, lastSprite2, lastSwitchTime2, switchSprite2));
    
    //         setTimeout(updateSpriteBasedOnTime, 0);
    //     } catch (error) {
    //         console.error('Error in updateSpriteBasedOnTime:', error);
    //     }
    // }


    function validateDanceData(data) {
        try {
            if (!Array.isArray(data)) {
                throw new Error('Dance data is not an array');
            }

            const validatedData = data.filter(entry => {
                if (!entry || typeof entry !== 'object') {
                    console.warn('Invalid entry in dance data:', entry);
                    return false;
                }
                if (typeof entry.t !== 'number' || typeof entry.d !== 'number' || typeof entry.l !== 'number') {
                    console.warn('Invalid data type in entry:', entry);
                    return false;
                }
                return true;
            });

            if (validatedData.length !== data.length) {
                console.warn('Some entries in dance data were invalid');
            }

            return validatedData;
        } catch (error) {
            console.error('Error in validateDanceData:', error);
            return [];
        }
    }
    
    // let lastSprite1 = 4;
    // let lastSprite2 = 4;
    // let mainEntry1 = null;
    // let mainEntry2 = null;
    // let emphasisEnd1 = 0;
    // let emphasisEnd2 = 0;
    
    // const emphasisDuration = BPM; // ms
    
    // function updateSpriteBasedOnTime() {
    //     try {
    //         if (!danceData1 || !danceData2 || !isAudioStarted) return;
    
    //         let currentTime = performance.now();
    
    //         function findNearestEntry(data, time) {
    //             return data.reduce((nearest, entry) => {
    //                 return (Math.abs(entry.t - time) < Math.abs(nearest.t - time))
    //                     ? entry
    //                     : nearest;
    //             });
    //         }
    
    //         function applyEntry(entry, lastSprite, mainEntry, emphasisEnd, switchFn) {
    //             let now = performance.now();
    
    //             // If main movement is still active, keep it
    //             if (mainEntry !== null && now < emphasisEnd) {
    //                 switchFn(mainEntry);
    //                 return { lastSprite, mainEntry, emphasisEnd };
    //             }
    
    //             // Pick nearest entry
    //             if (entry && entry.d !== lastSprite) {
    //                 // Only emphasize non-idle moves
    //                 if (entry.d >= 0 && entry.d <= 3) {
    //                     mainEntry = entry.d;
    //                     emphasisEnd = now + emphasisDuration;
    //                 } else {
    //                     mainEntry = null; // idle, no emphasis
    //                 }
    
    //                 lastSprite = entry.d;
    //                 switchFn(entry.d);
    //             }
    
    //             return { lastSprite, mainEntry, emphasisEnd };
    //         }
    
    //         let nearest1 = findNearestEntry(danceData1, currentTime);
    //         let nearest2 = findNearestEntry(danceData2, currentTime);
    
    //         ({ lastSprite: lastSprite1, mainEntry: mainEntry1, emphasisEnd: emphasisEnd1 } =
    //             applyEntry(nearest1, lastSprite1, mainEntry1, emphasisEnd1, switchSprite1));
    
    //         ({ lastSprite: lastSprite2, mainEntry: mainEntry2, emphasisEnd: emphasisEnd2 } =
    //             applyEntry(nearest2, lastSprite2, mainEntry2, emphasisEnd2, switchSprite2));
    
    //         setTimeout(updateSpriteBasedOnTime, 0);
    //     } catch (error) {
    //         console.error('Error in updateSpriteBasedOnTime:', error);
    //     }
    // }
    let history1 = [];
    let history2 = [];
    let lastSprite1 = 4;
    let lastSprite2 = 4;
    let mainEntry1 = null;
    let mainEntry2 = null;
    let emphasisEnd1 = 0;
    let emphasisEnd2 = 0;
    
    const emphasisDuration = ((beatDuration*1000)/4);     // ms main movement dominates
    console.warn(emphasisDuration)
    const anticipationOffset = ((beatDuration*1000)/16);    // ms look-ahead for anticipation
    console.warn(anticipationOffset)
    const maxHistory = 5;             // length of rolling average
    
    // Micro-motion config
    const microMotionRange = 0.01;    // sway range for moving (Babylon units)
    const idleDriftRange   = 0.005;   // sway range for idle (Babylon units)
    const idleDriftSpeed   = 0.002;   // speed of sine drift
    
    function updateSpriteBasedOnTime() {
        try {
            if (!danceData1 || !danceData2 || !isAudioStarted) return;
            let currentTime = performance.now();
    
            function rollingAverage(newValue, history) {
                history.push(newValue);
                if (history.length > maxHistory) history.shift();
                return history.reduce((a,v)=>a+v,0)/history.length;
            }
    
            function findNearestEntry(data, time) {
                return data.reduce((nearest, entry) =>
                    Math.abs(entry.t - time) < Math.abs(nearest.t - time) ? entry : nearest
                );
            }
    
            function lookAhead(data, time, window=1000) {
                return data.find(e => e.t > time && e.t <= time + window);
            }
    
            function getMicroOffsets(isIdle, now) {
                if (isIdle) {
                    // idle drift = smooth sine wave
                    return {
                        x: Math.sin(now * idleDriftSpeed) * idleDriftRange,
                        y: Math.cos(now * idleDriftSpeed) * idleDriftRange
                    };
                } else {
                    // active micro jitter
                    return {
                        x: (Math.random() - 0.5) * microMotionRange,
                        y: (Math.random() - 0.5) * microMotionRange
                    };
                }
            }
    
            function applyEntry(entry, history, lastSprite, mainEntry, emphasisEnd, switchFn) {
                let now = performance.now();
    
                // rolling avg direction
                rollingAverage(entry.d, history);
    
                // look ahead for anticipation
                let upcoming = lookAhead(danceData1, currentTime + anticipationOffset);
                let target = entry.d;
                if (upcoming && upcoming.d >= 0 && upcoming.d <= 3) {
                    target = Math.round((entry.d + upcoming.d) / 2);
                }
    
                // maintain emphasis if active
                if (mainEntry !== null && now < emphasisEnd) {
                    let offsets = getMicroOffsets(mainEntry >= 4, now);
                    switchFn(mainEntry, offsets.x, offsets.y);
                    return { lastSprite, mainEntry, emphasisEnd };
                }
    
                // if changed, emphasize or idle
                if (entry.d !== lastSprite) {
                    if (entry.d >= 0 && entry.d <= 3) {
                        mainEntry = entry.d;
                        emphasisEnd = now + Math.min(entry.l,emphasisDuration);
                    } else {
                        mainEntry = null;
                    }
    
                    // small easing transition: halfway to target first
                    const offsets = getMicroOffsets(entry.d >= 4, now);
                    setTimeout(() => switchFn(target, offsets.x, offsets.y), 30);
                    setTimeout(() => {
                        let finalOffsets = getMicroOffsets(entry.d >= 4, performance.now());
                        switchFn(entry.d, finalOffsets.x, finalOffsets.y);
                    }, 60);
    
                    lastSprite = entry.d;
                } else {
                    // apply micro motion even if idle/repeated
                    let offsets = getMicroOffsets(entry.d >= 4, now);
                    switchFn(entry.d, offsets.x, offsets.y);
                }
    
                return { lastSprite, mainEntry, emphasisEnd };
            }
    
            // Anticipatory nearest entries
            let nearest1 = findNearestEntry(danceData1, currentTime + anticipationOffset);
            let nearest2 = findNearestEntry(danceData2, currentTime + anticipationOffset);
    
            ({ lastSprite: lastSprite1, mainEntry: mainEntry1, emphasisEnd: emphasisEnd1 } =
                applyEntry(nearest1, history1, lastSprite1, mainEntry1, emphasisEnd1, switchSprite1));
    
            ({ lastSprite: lastSprite2, mainEntry: mainEntry2, emphasisEnd: emphasisEnd2 } =
                applyEntry(nearest2, history2, lastSprite2, mainEntry2, emphasisEnd2, switchSprite2));
    
            setTimeout(updateSpriteBasedOnTime, 0);
    
        } catch (error) {
            console.error('Error in updateSpriteBasedOnTime:', error);
        }
    }

    function startSelfHealingCheck(enableSelfHealing = true) {
        if (!enableSelfHealing) return;

        const intervalSeconds = 5;
        let lastSpriteSwitchTime1 = Date.now();
        let lastSpriteSwitchTime2 = Date.now();

        setInterval(() => {
            try {
                const currentTime = Date.now();
                if (currentTime - lastSpriteSwitchTime1 > intervalSeconds * 1000) {
                    updateSpriteBasedOnTime();
                }
                if (currentTime - lastSpriteSwitchTime2 > intervalSeconds * 1000) {
                    updateSpriteBasedOnTime();
                }
                lastSpriteSwitchTime1 = currentTime;
                lastSpriteSwitchTime2 = currentTime;
            } catch (error) {
                console.error('Error in self-healing check:', error);
            }
        }, intervalSeconds * 1000);
    }

    function getIdleSprite(sheetData) {
        return sheetData.find(sheet => sheet.url.endsWith("idle_sprite_sheet.png")) || null;
    }

    function createSpriteManager1(data, scene) {
        try {
            if (!data) {
                const idleSprite = getIdleSprite(config.sprites.group[vocalist]);
                if (idleSprite) {
                    return new BABYLON.SpriteManager("spriteManager", idleSprite.url, 1, { width: idleSprite.width, height: idleSprite.height }, scene);
                } else {
                    throw new Error('No idle sprite found');
                }
            }

            return new BABYLON.SpriteManager("spriteManager", data.url, data.frames, { width: data.width, height: data.height }, scene);
        } catch (error) {
            console.error('Error creating sprite manager:', error);
            return null;
        }
    }

    function createSpriteManager2(data, scene) {
        try {
            if (!data) {
                const idleSprite = getIdleSprite(config.sprites.group.tomSusanAssets);
                if (idleSprite) {
                    return new BABYLON.SpriteManager("spriteManager", idleSprite.url, 1, { width: idleSprite.width, height: idleSprite.height }, scene);
                } else {
                    throw new Error('No idle sprite found');
                }
            }

            return new BABYLON.SpriteManager("spriteManager", data.url, data.frames, { width: data.width, height: data.height }, scene);
        } catch (error) {
            console.error('Error creating sprite manager:', error);
            return null;
        }
    }
    })();
});