const data = [
    {
        jurusan: "Ilmu Sejarah",
        nilai: [
            { total: 557.6, subtest: { PU: 607.72, PK: 485.57, PPU: 658.4, PBM: 650.91, "Literasi Indonesia": 532.71, "Literasi Inggris": 544.25, PM: 423.75 } },
        ],
    },
    {
        jurusan: "Sastra Arab",
        nilai: [
            {}
        ],
    },
    {
        jurusan: "Sastra Daerah",
        nilai: [
            { total: 	564	},
        ],
    },
    {
        jurusan: "Sastra Indonesia",
        nilai: [
            { total: 	627.7842857	, subtest: { PU:	685.65	, PK:	517.49	, PPU:	644.76	, PBM:	549.87	, "Literasi Indonesia":	529.86	, "Literasi Inggris":	648.38	, PM:	818.48	} },
            { total: 	640.94	, subtest: { PU:	663.99	, PK:	673.49	, PPU:	745.51	, PBM:	604.57	, "Literasi Indonesia":	608.23	, "Literasi Inggris":	654.5	, PM:	536.29	} },
        ],
    },
    {
        jurusan: "Sastra Inggris",
        nilai: [
            { total: 	630.73	, subtest: { PU:	629.47	, PK:	591.76	, PPU:	627.59	, PBM:	523.07	, "Literasi Indonesia":	637.84	, "Literasi Inggris":	751.04	, PM:	654.34	} },
            { total: 	659.7828571	, subtest: { PU:	683.01	, PK:	606.86	, PPU:	622.37	, PBM:	694.66	, "Literasi Indonesia":	734.12	, "Literasi Inggris":	792.28	, PM:	485.18	} },
            { total: 	618.0642857	, subtest: { PU:	719.52	, PK:	610.98	, PPU:	631.62	, PBM:	660.57	, "Literasi Indonesia":	617.42	, "Literasi Inggris":	672.29	, PM:	414.05	} },
            { total: 	632.93	},														
            { total: 	656	},														
        ],
    },
    {
        jurusan: "Bahasa Mandarin dan Kebudayaan Tiongkok",
        nilai: [
            { total: 	542	},
            { total: 	586	},
        ],
    },
    {
        jurusan: "Ilmu Hukum",
        nilai: [
            { total: 	652.1785714	, subtest: { PU:	628.15	, PK:	726.53	, PPU:	708.61	, PBM:	634.87	, "Literasi Indonesia":	642.81	, "Literasi Inggris":	567.22	, PM:	65706	} },
            { total: 	638.0728571	, subtest: { PU:	690.83	, PK:	683.88	, PPU:	669.66	, PBM:	623.08	, "Literasi Indonesia":	593.77	, "Literasi Inggris":	652.69	, PM:	552.6	} },
            { total: 	638	},
            { total: 	624.1028571	, subtest: { PU:	673.25	, PK:	716.71	, PPU:	598.76	, PBM:	641.56	, "Literasi Indonesia":	552.11	, "Literasi Inggris":	586.73	, PM:	599.6	} },
            { total: 	615	},
            { total: 	602.8557143	, subtest: { PU:	628.17	, PK:	425.88	, PPU:	555.57	, PBM:	595.54	, "Literasi Indonesia":	745.17	, "Literasi Inggris":	615.81	, PM:	653.85	} },
            { total: 	602.6714286	, subtest: { PU:	622.5	, PK:	395.19	, PPU:	664.09	, PBM:	669.24	, "Literasi Indonesia":	546.34	, "Literasi Inggris":	685.6	, PM:	635.74	} },
            { total: 	597.71	},
        ],
    },
    {
        jurusan: "Akuntansi",
        nilai: [
            { total: 	736.4928571	, subtest: { PU:	757.16	, PK:	776	, PPU:	752.97	, PBM:	694.03	, "Literasi Indonesia":	668.37	, "Literasi Inggris":	739.47	, PM:	767.45	} },
            { total: 	668	},														
            { total: 	662.4157143	, subtest: { PU:	677.71	, PK:	570.25	, PPU:	719.13	, PBM:	653.38	, "Literasi Indonesia":	637.04	, "Literasi Inggris":	693.89	, PM:	685.51	} },
            {  total: 	662	},														
        ],
    },
    {
        jurusan: "Ekonomi Pembangunan",
        nilai: [
            { total: 	698.1814286	, subtest: { PU:	585.92	, PK:	855.52	, PPU:	703.4	, PBM:	654.54	, "Literasi Indonesia":	597.5	, "Literasi Inggris":	747.47	, PM:	742.92	} },
            { total: 	698	},														
            { total: 	659.5114286	, subtest: { PU:	658.76	, PK:	683.04	, PPU:	686.36	, PBM:	569.06	, "Literasi Indonesia":	634.42	, "Literasi Inggris":	680.35	, PM:	704.59	} },
            { total: 	631	},														
            { total: 	630	},														
            { total: 	625	},														
            { total: 	624.34	, subtest: { PU:	610.06	, PK:	687.51	, PPU:	702.86	, PBM:	673.25	, "Literasi Indonesia":	600.1	, "Literasi Inggris":	547.44	, PM:	549.16	} },
            { total: 	614	},														
        ],
    },
    {
        jurusan: "Manajemen",
        nilai: [
            { total: 	677.4357143	, subtest: { PU:	692.62	, PK:	663.55	, PPU:	713.71	, PBM:	747.07	, "Literasi Indonesia":	538.74	, "Literasi Inggris":	562.69	, PM:	823.67	} },
            { total: 	643.98	, subtest: { PU:	691.77	, PK:	673.59	, PPU:	659.98	, PBM:	568.46	, "Literasi Indonesia":	736.83	, "Literasi Inggris":	578.51	, PM:	598.72	} },
            { total: 	632.5057143	, subtest: { PU:	630.77	, PK:	545.31	, PPU:	631.62	, PBM:	581.4	, "Literasi Indonesia":	735.65	, "Literasi Inggris":	571.51	, PM:	731.28	} },
        ],
    },    
    {
        jurusan: "Bisnis Digital",
        nilai: [
            {}
        ],
    },    
    {
        jurusan: "Hubungan Internasional",
        nilai: [
            {}
        ],
    },

    {
        jurusan: "Administrasi Negara",
        nilai: [
            { total: 	651.5585714	, subtest: { PU:	725.95	, PK:	532.26	, PPU:	671.76	, PBM:	729.51	, "Literasi Indonesia":	542.24	, "Literasi Inggris":	711.52	, PM:	647.67	} },
            { total: 	642.24	, subtest: { PU:	639.23	, PK:	651.95	, PPU:	747.17	, PBM:	575.61	, "Literasi Indonesia":	694.2	, "Literasi Inggris":	628.73	, PM:	558.79	} },
            { total: 	636.9571429	, subtest: { PU:	653.36	, PK:	544.05	, PPU:	656.76	, PBM:	572.73	, "Literasi Indonesia":	704	, "Literasi Inggris":	606.72	, PM:	721.08	} },
            { total: 	630.6071429	, subtest: { PU:	721.72	, PK:	603	, PPU:	744.76	, PBM:	550.81	, "Literasi Indonesia":	656.77	, "Literasi Inggris":	569.85	, PM:	567.34	} },
            { total: 	628	},														
        ]
    },
    {
        jurusan: "Ilmu Komunikasi",
        nilai: [
            { total: 	672	},														
            { total: 	651.6857143	, subtest: { PU:	677.98	, PK:	468.78	, PPU:	672.82	, PBM:	654.61	, "Literasi Indonesia":	672.57	, "Literasi Inggris":	723.23	, PM:	691.81	} },
            { total: 	642	},														
            { total: 	639	},														
            { total: 	632.8528571	, subtest: { PU:	690.29	, PK:	601.16	, PPU:	583.79	, PBM:	696.53	, "Literasi Indonesia":	546.8	, "Literasi Inggris":	689.22	, PM:	622.18	} },
        ]
    },
    {
        jurusan: "Sosiologi",
        nilai: [
            { total: 	581.8414286	, subtest: { PU:	580.86	, PK:	468.51	, PPU:	593.22	, PBM:	591.61	, "Literasi Indonesia":	713.47	, "Literasi Inggris":	577.45	, PM:	547.77	} },
        ]
    },
    {
        jurusan: "Kebidanan",
        nilai: [
            { total: 	650.3142857	, subtest: { PU:	711.02	, PK:	617.83	, PPU:	682.95	, PBM:	652.19	, "Literasi Indonesia":	630.7	, "Literasi Inggris":	534.22	, PM:	723.29	} },
            { total: 	640	},														
        ]
    },
    {
        jurusan: "Kedokteran",
        nilai: [
            { total: 	789.0742857	, subtest: { PU:	749.31	, PK:	771.91	, PPU:	703.63	, PBM:	816.38	, "Literasi Indonesia":	775.93	, "Literasi Inggris":	789.51	, PM:	916.85	} },
            { total: 	768.8571429	, subtest: { PU:	787.75	, PK:	853.49	, PPU:	750.52	, PBM:	751.75	, "Literasi Indonesia":	741.18	, "Literasi Inggris":	689.29	, PM:	808.02	} },        
            { total: 	745.6414286	, subtest: { PU:	803.98	, PK:	817.64	, PPU:	645.78	, PBM:	770.86	, "Literasi Indonesia":	711.46	, "Literasi Inggris":	630.67	, PM:	839.1	} },
        ]
    },
    {
        jurusan: "Agribisnis",
        nilai: [
            { total: 660.37 },
            { total: 	618.26	, subtest: { PU:	704.1	, PK:	435.43	, PPU:	599.4	, PBM:	649.12	, "Literasi Indonesia":	623.96	, "Literasi Inggris":	701.84	, PM:	613.97}},
        ]
    },
    {
        jurusan: "Agroteknlogi",
        nilai: [
            { total: 	654.1214286	, subtest: { PU:	572.43	, PK:	800.51	, PPU:	611.31	, PBM:	699.03	, "Literasi Indonesia":	626.8	, "Literasi Inggris":	677.67	, PM:	591.1	} },
            { total: 	628.9214286	, subtest: { PU:	562.94	, PK:	669.81	, PPU:	625.62	, PBM:	691.52	, "Literasi Indonesia":	604.18	, "Literasi Inggris":	652.06	, PM:	596.32	} },
            { total: 	590.8185714	, subtest: { PU:	621.98	, PK:	461.98	, PPU:	566.42	, PBM:	634.11	, "Literasi Indonesia":	639.83	, "Literasi Inggris":	561.57	, PM:	649.84	} },
        ]
    },
    {
        jurusan: "Ilmu Tanah",
        nilai: []
    },
    {
        jurusan: "Penyuluhan dan Komunikasi Pertanian",
        nilai: [
            { total: 	596.16	, subtest: { PU:	712.4	, PK:	573.61	, PPU:	508.95	, PBM:	635.38	, "Literasi Indonesia":	573.43	, "Literasi Inggris":	483.98	, PM:	685.37	} },
        ]
    },
    {
        jurusan: "Ilmu Pangan",
        nilai: [
            { total: 	668	},														
            { total: 	662.2057143	, subtest: { PU:	733.98	, PK:	664.8	, PPU:	659.62	, PBM:	690.18	, "Literasi Indonesia":	671.59	, "Literasi Inggris":	637.11	, PM:	578.16	} },
            { total: 	654.7985714	, subtest: { PU:	568.57	, PK:	627.88	, PPU:	764.61	, PBM:	671.17	, "Literasi Indonesia":	638.69	, "Literasi Inggris":	691.21	, PM:	621.46	} },
        ]
    },
    {
        jurusan: "Pengelola Hutan",
        nilai: []
    },
    {
        jurusan: "Peternakan",
        nilai: [
            { total: 	633	},
        ]
    },
    {
        jurusan: "Arsitektur",
        nilai: []
    },
    {
        jurusan: "Perencanaan Wilayah dan Kota",
        nilai: [
            { total: 	681.9771429	, subtest: { PU:	772.24	, PK:	524.31	, PPU:	755.66	, PBM:	727.87	, "Literasi Indonesia":	723.04	, "Literasi Inggris":	607.66	, PM:	663.06	} },
        ]
    },
    {
        jurusan: "Teknik Elektro",
        nilai: []
    },
    {
        jurusan: "Teknik Industri",
        nilai: [
            { total: 	707.2414286	, subtest: { PU:	680.28	, PK:	867.46	, PPU:	642.46	, PBM:	596.39	, "Literasi Indonesia":	756.76	, "Literasi Inggris":	717.95	, PM:	689.39	} },
            { total: 	697.5142857	, subtest: { PU:	756.03	, PK:	807.66	, PPU:	583.95	, PBM:	705.2	, "Literasi Indonesia":	625.68	, "Literasi Inggris":	608.95	, PM:	795.13	} },
            { total: 	697	},														
            { total: 	683	},														
            { total: 	677.3842857	, subtest: { PU:	666.19	, PK:	727.1	, PPU:	654.79	, PBM:	750.45	, "Literasi Indonesia":	723	, "Literasi Inggris":	493.32	, PM:	726.84	} },
        ]
    },
    {
        jurusan: "Teknik Kimia",
        nilai: [
            { total: 	705.25	, subtest: { PU:	707.81	, PK:	793.35	, PPU:	646.69	, PBM:	702.95	, "Literasi Indonesia":	676.04	, "Literasi Inggris":	595.59	, PM:	814.32	} },
            { total: 	691.0857143	, subtest: { PU:	695.5	, PK:	766.03	, PPU:	613.58	, PBM:	649.33	, "Literasi Indonesia":	673.56	, "Literasi Inggris":	775.59	, PM:	664.01	} },
            { total: 	672.6828571	, subtest: { PU:	682.27	, PK:	799.02	, PPU:	627.98	, PBM:	588.48	, "Literasi Indonesia":	643.08	, "Literasi Inggris":	635.34	, PM:	732.61	} },
            { total: 	657.1557143	, subtest: { PU:	706.01	, PK:	709.97	, PPU:	682.54	, PBM:	702.66	, "Literasi Indonesia":	601.71	, "Literasi Inggris":	664.13	, PM:	533.07	} },
        ]
    },
    {
        jurusan: "Teknik Mesin",
        nilai: []
    },
    {
        jurusan: "Teknik Sipil",
        nilai: [
            { total: 	717	},														
            { total: 	709.0414286	, subtest: { PU:	712.96	, PK:	754.24	, PPU:	695.04	, PBM:	607.39	, "Literasi Indonesia":	686.65	, "Literasi Inggris":	632.86	, PM:	874.15	} },
            { total: 	705.3285714	, subtest: { PU:	721.07	, PK:	824.49	, PPU:	756.03	, PBM:	677.16	, "Literasi Indonesia":	660.7	, "Literasi Inggris":	745.12	, PM:	552.73	} },
            { total: 	702	},														
            { total: 	664.5957143	, subtest: { PU:	683.92	, PK:	820.37	, PPU:	729.75	, PBM:	660.75	, "Literasi Indonesia":	577.13	, "Literasi Inggris":	602.63	, PM:	577.62	} },
            { total: 	654	},														
            { total: 	649.3928571	, subtest: { PU:	659.74	, PK:	768	, PPU:	624.55	, PBM:	451.46	, "Literasi Indonesia":	701.84	, "Literasi Inggris":	628.21	, PM:	711.95	} },
        ]
    },
    {
        jurusan: "Bimbingan dan Konseling",
        nilai: [
            { total: 	579.0028571	, subtest: { PU:	651.83	, PK:	546.45	, PPU:	643.17	, PBM:	710.14	, "Literasi Indonesia":	561.77	, "Literasi Inggris":	438.43	, PM:	501.23	} },
        ]
    },
    {
        jurusan: "Pendidikan Administrasi Perkantoran",
        nilai: [
            { total: 	610.0642857	, subtest: { PU:	575.33	, PK:	610.98	, PPU:	675.62	, PBM:	593.03	, "Literasi Indonesia":	436.45	, "Literasi Inggris":	608.17	, PM:	770.87	} },
            { total: 	590.3142857	, subtest: { PU:	603.13	, PK:	511.93	, PPU:	586.65	, PBM:	517.72	, "Literasi Indonesia":	661.49	, "Literasi Inggris":	620.24	, PM:	631.04	} },
            { total: 	567	},														
        ]
    },
    {
        jurusan: "Pendidikan Akuntansi",
        nilai: []
    },
    {
        jurusan: "Pendidikan Bahasa dan Sastra Indonesia",
        nilai: [
            { total: 	633.4642857	, subtest: { PU:	611.2	, PK:	771.88	, PPU:	608.76	, PBM:	651.69	, "Literasi Indonesia":	579.4	, "Literasi Inggris":	568.15	, PM:	643.17	} },
            { total: 	620.54	},														
                { total: 	567	},														
        ]
    },
    {
        jurusan: "Pendidikan Bahasa Inggris",
        nilai: []
    },
    {
        jurusan: "Pendidikan Bahasa Jawa",
        nilai: []
    },
    {
        jurusan: "Pendidikan Biologi",
        nilai: [
            { total: 	641.8285714	, subtest: { PU:	641.78	, PK:	620.12	, PPU:	646.56	, PBM:	769.1	, "Literasi Indonesia":	639.76	, "Literasi Inggris":	567.09	, PM:	608.39	} },
        ]
    },
    {
        jurusan: "Pendidikan Ekonomi",
        nilai: []
    },
    {
        jurusan: "Pendidikan Fisika",
        nilai: []
    },
    {
        jurusan: "Pendidikan Geografi",
        nilai: []
    },
    {
        jurusan: "Pendidikan Guru Pendidikan Anak Usia Dini",
        nilai: []
    },
    {
        jurusan: "Pendidikan Guru Sekolah Dasar",
        nilai: [
            { total: 	652.6785714	, subtest: { PU:	686.88	, PK:	509.25	, PPU:	626.65	, PBM:	686.65	, "Literasi Indonesia":	633.23	, "Literasi Inggris":	735.02	, PM:	691.07	} },
            { total: 	626.1457143	, subtest: { PU:	654.53	, PK:	618.15	, PPU:	647.69	, PBM:	729.39	, "Literasi Indonesia":	535.92	, "Literasi Inggris":	673.04	, PM:	524.3	} },
            { total: 	590	},														
            { total: 	590	},														
        ]
    },
    {
        jurusan: "Pendidikan Guru Sekolah Dasar (Kebumen)",
        nilai: []
    },
    {
        jurusan: "Pendidikan Ilmu Pengetahuan Alam",
        nilai: []
    },
    {
        jurusan: "Pendidikan Kimia",
        nilai: [
            { total: 	642	},														
            { total: 	582.86	, subtest: { PU:	542.65	, PK:	734.54	, PPU:	564.76	, PBM:	573.24	, "Literasi Indonesia":	614.99	, "Literasi Inggris":	574.98	, PM:	474.86	} },
        ]
    },
    {
        jurusan: "Pendidikan Luar Biasa",
        nilai: [
            { total: 	580	},														
            { total: 	555.17	, subtest: { PU:	561.59	, PK:	681.3	, PPU:	632.71	, PBM:	547.34	, "Literasi Indonesia":	563.2	, "Literasi Inggris":	493.61	, PM:	406.44	} },
        ]
    },
    {
        jurusan: "Pendidikan Matematika",
        nilai: [
            { total: 	628.0414286	, subtest: { PU:	656.7	, PK:	663.01	, PPU:	602.37	, PBM:	612.76	, "Literasi Indonesia":	653.29	, "Literasi Inggris":	583.48	, PM:	624.68	} },
        ]
    },
    {
        jurusan: "Pendidikan Pancasila dan Kewarganegaraan",
        nilai: [
            { total: 	592.9571429	, subtest: { PU:	635.7	, PK:	537.16	, PPU:	509.35	, PBM:	599.13	, "Literasi Indonesia":	558.99	, "Literasi Inggris":	625.81	, PM:	684.56	} },
        ]
    },
    {
        jurusan: "Pendidikan Sejarah",
        nilai: [
            { total: 	586.03	, subtest: { PU:	535.01	, PK:	548.03	, PPU:	500.27	, PBM:	629.32	, "Literasi Indonesia":	632.07	, "Literasi Inggris":	623.19	, PM:	634.32	} },
        ]
    },
    {
        jurusan: "Pendidikan Seni Rupa",
        nilai: []
    },
    {
        jurusan: "Pendidikan Sosiologi Antropologi",
        nilai: [
            { total: 	590.6142857	, subtest: { PU:	472.56	, PK:	526.66	, PPU:	742.71	, PBM:	652.99	, "Literasi Indonesia":	582.91	, "Literasi Inggris":	562.52	, PM:	593.95	} },
        ]
    },
    {
        jurusan: "Pendidikan Teknik Bangunan",
        nilai: []
    },
    {
        jurusan: "Pendidikan Teknik Informatika dan Komputer",
        nilai: []
    },
    {
        jurusan: "Pendidikan Teknik Mesin",
        nilai: []
    },
    {
        jurusan: "Teknologi Pendidikan",
        nilai: [
            { total: 	617	},
        ]
    },
    {
        jurusan: "Biologi",
        nilai: []
    },
    {
        jurusan: "Farmasi",
        nilai: []
    },
    {
        jurusan: "Fisika",
        nilai: []
    },
    {
        jurusan: "Kimia",
        nilai: [
            { total: 	693	},
            { total: 	648	},
            { total: 	642.5},
            { total: 	622	},
        ]
    },
    {
        jurusan: "Matematika",
        nilai: []
    },
    {
        jurusan: "Statistika",
        nilai: [
            { total: 	682.5385714	, subtest: { PU:	681.13	, PK:	845.91	, PPU:	674.39	, PBM:	618.58	, "Literasi Indonesia":	556.16	, "Literasi Inggris":	720.93	, PM:	680.67	} },
            { total: 	672.0514286	, subtest: { PU:	691.38	, PK:	758.38	, PPU:	605.91	, PBM:	488.64	, "Literasi Indonesia":	622.69	, "Literasi Inggris":	676.27	, PM:	861.09	} },
        ]
    },
    {
        jurusan: "Ilmu Lingkungan",
        nilai: [
            { total: 	656	},														
            { total: 	629	},														
            { total: 	621.88	, subtest: { PU:	629.47	, PK:	542.35	, PPU:	696.47	, PBM:	652.71	, "Literasi Indonesia":	683.79	, "Literasi Inggris":	605.74	, PM:	542.63	} },
            { total: 	620.9685714	, subtest: { PU:	605.16	, PK:	527.83	, PPU:	673.18	, PBM:	608.86	, "Literasi Indonesia":	542.01	, "Literasi Inggris":	679.01	, PM:	710.73	} },
        ]
    },
    {
        jurusan: "Desain Interior",
        nilai: []
    },
    {
        jurusan: "Desain Komunikasi Visual",
        nilai: [
            { total: 	654.7185714	, subtest: { PU:	645.55	, PK:	517.74	, PPU:	751.11	, PBM:	621.81	, "Literasi Indonesia":	660.96	, "Literasi Inggris":	651.33	, PM:	734.53	} },
            { total: 	650.0914286	, subtest: { PU:	658.73	, PK:	459.53	, PPU:	736.52	, PBM:	683.21	, "Literasi Indonesia":	738.87	, "Literasi Inggris":	558.62	, PM:	715.16	} },
            { total: 	650.0914286	, subtest: { PU:	658.73	, PK:	459.53	, PPU:	736.52	, PBM:	683.21	, "Literasi Indonesia":	738.87	, "Literasi Inggris":	558.62	, PM:	715.16	} },
            { total: 	645.3885714	, subtest: { PU:	598.8	, PK:	598.87	, PPU:	578.16	, PBM:	746.56	, "Literasi Indonesia":	622.03	, "Literasi Inggris":	762.66	, PM:	610.64	} },
            { total: 	613.2128571	, subtest: { PU:	602.62	, PK:	540.56	, PPU:	679.78	, PBM:	713.52	, "Literasi Indonesia":	588.11	, "Literasi Inggris":	666.31	, PM:	501.59	} },
            { total: 	610.1471429	, subtest: { PU:	633.29	, PK:	449.12	, PPU:	659.51	, PBM:	503.22	, "Literasi Indonesia":	729.97	, "Literasi Inggris":	762.28	, PM:	533.64	} },
        ]
    },
    {
        jurusan: "Kriya Seni (Desain Tekstil)",
        nilai: []
    },
    {
        jurusan: "Seni Rupa Murni",
        nilai: []
    },
    {
        jurusan: "Pendidikan Jasmani, Kesehatan, dan Rekreasi",
        nilai: []
    },
    {
        jurusan: "Pendidikan Kepelatihan Olahraga",
        nilai: []
    },
    {
        jurusan: "Informatika",
        nilai: [
            { total: 	740.35	, subtest: { PU:	807.22	, PK:	652.43	, PPU:	814.36	, PBM:	754.81	, "Literasi Indonesia":	646.89	, "Literasi Inggris":	768.1	, PM:	738.64	} },
            { total: 	726.9042857	, subtest: { PU:	749.22	, PK:	747.86	, PPU:	686.26	, PBM:	683.6	, "Literasi Indonesia":	711.41	, "Literasi Inggris":	756.13	, PM:	753.85	} },
            { total: 	711.0642857	, subtest: { PU:	714.79	, PK:	838.46	, PPU:	653.75	, PBM:	615.19	, "Literasi Indonesia":	693.71	, "Literasi Inggris":	793.67	, PM:	667.88	} },
            { total: 	685	},														
            { total: 	679.2	, subtest: { PU:	773.58	, PK:	467.87	, PPU:	699.93	, PBM:	742.03	, "Literasi Indonesia":	667.87	, "Literasi Inggris":	661.34	, PM:	741.78	} },
            { total: 	670.3198571	, subtest: { PU:	736.24	, PK:	757.34	, PPU:	636.71	, PBM:	636.71	, "Literasi Indonesia":	641.47	, "Literasi Inggris":	616.919	, PM:	666.85	} },
        ]
    },
    {
        jurusan: "Sains Data",
        nilai: []
    },
    {
        jurusan: "Psikologi",
        nilai: [
            { total: 	735.0685714	, subtest: { PU:	790.26	, PK:	675.74	, PPU:	740.81	, PBM:	663.58	, "Literasi Indonesia":	765.62	, "Literasi Inggris":	749.7	, PM:	759.77	} },
            { total: 	735	},														
            { total: 	728.49	, subtest: { PU:	709.37	, PK:	739.83	, PPU:	775.12	, PBM:	670.75	, "Literasi Indonesia":	722.48	, "Literasi Inggris":	735.05	, PM:	746.83	} },
            { total: 	709.3185714	, subtest: { PU:	701.93	, PK:	715.59	, PPU:	719.75	, PBM:	701.92	, "Literasi Indonesia":	614.99	, "Literasi Inggris":	669.3	, PM:	841.75	} },
            { total: 	699.3914286	, subtest: { PU:	702.78	, PK:	765.25	, PPU:	646.12	, PBM:	732.68	, "Literasi Indonesia":	643.5	, "Literasi Inggris":	746.5	, PM:	658.91	} },
            { total: 	699.1457143	, subtest: { PU:	762.65	, PK:	739.18	, PPU:	634.39	, PBM:	702.29	, "Literasi Indonesia":	687.39	, "Literasi Inggris":	689.85	, PM:	678.27	} },
            { total: 	698.5157143	, subtest: { PU:	714.27	, PK:	780.21	, PPU:	687.4	, PBM:	570.75	, "Literasi Indonesia":	666.17	, "Literasi Inggris":	659.74	, PM:	811.07	} },
            { total: 	693.4228571	, subtest: { PU:	725.61	, PK:	728.2	, PPU:	748.86	, PBM:	720.96	, "Literasi Indonesia":	630.68	, "Literasi Inggris":	619.87	, PM:	679.78	} },
            { total: 	663.0971429	, subtest: { PU:	780.41	, PK:	497.45	, PPU:	671.35	, PBM:	705.55	, "Literasi Indonesia":	610.29	, "Literasi Inggris":	723.37	, PM:	653.26	} },
            { total: 	660.9514286	, subtest: { PU:	585.53	, PK:	607.33	, PPU:	637.41	, PBM:	609.67	, "Literasi Indonesia":	773.85	, "Literasi Inggris":	732.66	, PM:	680.21	} },
            { total: 	660.95	},														
            { total: 	654.0171429	, subtest: { PU:	680.38	, PK:	679.21	, PPU:	616.21	, PBM:	606.73	, "Literasi Indonesia":	597.59	, "Literasi Inggris":	670.51	, PM:	727.49	} },
        ]
    },
    {
        jurusan: "D4 Demografi dan Pencatatan Sipil",
        nilai: [
            { total: 	629	},
            { total: 	599.7742857	, subtest: { PU:	550.82	, PK:	669.8	, PPU:	679.04	, PBM:	628.89	, "Literasi Indonesia":	550.47	, "Literasi Inggris":	446.39	, PM:	673.01	} },
            { total: 	596.15	},
        ]
    },
    {
        jurusan: "D4 Keselamatan dan Kesehatan Kerja",
        nilai: [
            { total: 	660.4971429	, subtest: { PU:	756.92	, PK:	832.86	, PPU:	637.24	, PBM:	508.78	, "Literasi Indonesia":	571.17	, "Literasi Inggris":	668.11	, PM:	648.4	} },
            { total: 	655.4971429	, subtest: { PU:	699.7	, PK:	646.33	, PPU:	626.61	, PBM:	600.23	, "Literasi Indonesia":	708.08	, "Literasi Inggris":	721.37	, PM:	586.16	} },
        ]
    },
    {
        jurusan: "D3 Teknik Kimia",
        nilai: []
    },
    {
        jurusan: "D3 Perpajakan",
        nilai: [
            { total: 	647.48	},
            { total: 	621.3071429	, subtest: { PU:	630.54	, PK:	600.7	, PPU:	598.2	, PBM:	619.3	, "Literasi Indonesia":	682.42	, "Literasi Inggris":	669.53	, PM:	548.46	} },
        ]
    },
    {
        jurusan: "D3 Bahasa Inggris",
        nilai: [
            { total: 	630.49	, subtest: { PU:	634.28	, PK:	647.28	, PPU:	689.13	, PBM:	574.98	, "Literasi Indonesia":	711.91	, "Literasi Inggris":	629.05	, PM:	526.8	} },
        ]
    },
    {
        jurusan: "D3 Teknik Sipil",
        nilai: [
            { total: 	632.4228571	, subtest: { PU:	636.57	, PK:	677.57	, PPU:	625.61	, PBM:	634.82	, "Literasi Indonesia":	627.07	, "Literasi Inggris":	645.04	, PM:	580.28	} },
        ]
    },
    {
        jurusan: "D3 Manajemen Perdagangan",
        nilai: []
    },
    {
        jurusan: "D3 Bahasa Mandarin",
        nilai: []
    },
    {
        jurusan: "D3 Teknik Informatika",
        nilai: [
            { total: 	697.5528571	, subtest: { PU:	738.25	, PK:	706.59	, PPU:	623.8	, PBM:	576.37	, "Literasi Indonesia":	725.99	, "Literasi Inggris":	779.82	, PM:	732.05	} },
        ]
    },
    {
        jurusan: "D3 Manajemen Pemasaran",
        nilai: []
    },
    {
        jurusan: "D3 Desain Komunikasi Visual",
        nilai: []
    },
    {
        jurusan: "D3 Teknik Mesin",
        nilai: []
    },
    {
        jurusan: "D3 Manajemen Bisnis",
        nilai: [
            { total: 	625	},
        ]
    },
    {
        jurusan: "D3 Komunikasi Terapan",
        nilai: [
            { total: 	619.2757143	, subtest: { PU:	610.78	, PK:	595.66	, PPU:	664.48	, PBM:	659.67	, "Literasi Indonesia":	640.64	, "Literasi Inggris":	724.68	, PM:	439.02	} },
        ]
    },
    {
        jurusan: "D3 Budidaya Ternak",
        nilai: []
    },
    {
        jurusan: "D3 Keuangan dan Perbankan",
        nilai: []
    },
    {
        jurusan: "D3 Usaha Perjalanan Wisata",
        nilai: []
    },
    {
        jurusan: "D3 Teknologi Hasil Pertanian",
        nilai: [
            { total: 	594.2642857	, subtest: { PU:	663.15	, PK:	464.28	, PPU:	633.03	, PBM:	555.99	, "Literasi Indonesia":	478.59	, "Literasi Inggris":	678.77	, PM:	686.04	} },
        ]
    },
    {
        jurusan: "D3 Akuntasi",
        nilai: [
            { total: 	641.6842857	, subtest: { PU:	691.94	, PK:	739.74	, PPU:	513.37	, PBM:	566.01	, "Literasi Indonesia":	633	, "Literasi Inggris":	705.79	, PM:	641.94	} },
        ]
    },
    {
        jurusan: "D3 Manajemen Administrasi",
        nilai: []
    },
    {
        jurusan: "D3 Agribisnis",
        nilai: [
            { total: 	603	},														
            { total: 	593.55	, subtest: { PU:	611.47	, PK:	563.85	, PPU:	627.57	, PBM:	616.94	, "Literasi Indonesia":	643.79	, "Literasi Inggris":	568.94	, PM:	522.29	} },
            { total: 	527.30	},		
        ]
    },
    {
        jurusan: "D3 Farmasi",
        nilai: [
            { total: 	680	},
        ]
    },
    {
        jurusan: "D3 Perpustakaan",
        nilai: [
            { total: 	571.9	},
            { total: 	589	},
        ]
    },
    {
        jurusan: "D3 Kebidanan",
        nilai: []
    },
    {
        jurusan: "D3 Teknik Informatika PSDKU",
        nilai: []
    },
    {
        jurusan: "D3 Akuntasi PSDKU",
        nilai: []
    },
];

const availableKeywords = data.map((item) => item.jurusan); // Ambil semua nama jurusan
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output-box");

// Event pencarian
inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value.trim();

    if (input.length) {
        result = availableKeywords.filter((keyword) => keyword.toLowerCase().includes(input.toLowerCase()));
    }
    display(result);

    if (!result.length) {
        resultsBox.innerHTML = '';
        outputBox.innerHTML = ''; // Hapus hasil jika tidak ada pencarian
    }
};

// Menampilkan daftar hasil
function display(result) {
    const content = result.map((list) => `<li onclick="selectInput('${list}')">${list}</li>`);
    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

// Memilih input dari daftar
function selectInput(jurusan) {
    inputBox.value = jurusan;
    resultsBox.innerHTML = '';
    showResults(jurusan); // Tampilkan data hasil
}

function showResults(jurusan) {
    const selectedData = data.find((item) => item.jurusan === jurusan);

    if (selectedData) {
        const content = selectedData.nilai
            .map((item, index) => {
                const hasSubtest = item.subtest && Object.keys(item.subtest).length > 0; // Cek apakah subtest ada datanya

                return `
                <div class="result-item">
                    <div class="result-header">
                        <span>Total Rata-rata: ${item.total}</span>
                        ${
                            hasSubtest
                                ? `<button class="dropdown-btn" onclick="toggleDropdown(${index})">
                                       <i class="fa fa-chevron-circle-down" id="icon-${index}" aria-hidden="true"></i>
                                   </button>`
                                : ""
                        }
                    </div>
                    ${
                        hasSubtest
                            ? `<div class="dropdown-content" id="dropdown-${index}" style="display: none;">
                                    ${Object.entries(item.subtest)
                                        .map(([key, value]) => `<div>${key}: ${value}</div>`)
                                        .join('')}
                               </div>`
                            : ""
                    }
                </div>
                `;
            })
            .join('');

        outputBox.innerHTML = content;
    } else {
        outputBox.innerHTML = `<p>Jurusan tidak ditemukan.</p>`;
    }
}



function toggleDropdown(index) {
    const dropdown = document.getElementById(`dropdown-${index}`);
    const icon = document.getElementById(`icon-${index}`); // Ambil ikon berdasarkan index

    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        icon.classList.remove("fa-chevron-circle-down");
        icon.classList.add("fa-chevron-circle-up"); // Ubah ikon ke 'up'
    } else {
        dropdown.style.display = "none";
        icon.classList.remove("fa-chevron-circle-up");
        icon.classList.add("fa-chevron-circle-down"); // Ubah ikon ke 'down'
    }
}
