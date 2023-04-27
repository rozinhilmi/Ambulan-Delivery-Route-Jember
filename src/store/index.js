import { createSlice, configureStore } from '@reduxjs/toolkit';
const states = createSlice({
  name: 'states',
  initialState: {
    graf: [
      {
        "id": "50",
        "node_name": "Ajung",
        "neighbor_node": [
          {
            "node_name": "1",
            "distance": 2600
          },
          {
            "node_name": "18",
            "distance": 1800
          },
          {
            "node_name": "12",
            "distance": 6300
          },
          {
            "node_name": "98",
            "distance": 4800
          }
        ],
        "node_type": "3",
        "position": "-8.210793081437522, 113.65686196836323"
      },
      {
        "id": "95",
        "node_name": "Alun-alun Jember",
        "neighbor_node": [
          {
            "node_name": "17",
            "distance": 2600
          },
          {
            "node_name": "26",
            "distance": 4400
          },
          {
            "node_name": "27",
            "distance": 5700
          },
          {
            "node_name": "85",
            "distance": 3100
          },
          {
            "node_name": "86",
            "distance": 600
          },
          {
            "node_name": "87",
            "distance": 260
          },
          {
            "node_name": "91",
            "distance": 2100
          },
          {
            "node_name": "103",
            "distance": 1200
          }
        ],
        "node_type": "3",
        "position": "-8.167826, 113.703460"
      },
      {
        "id": "97",
        "node_name": "Alun-alun Jenggawah",
        "neighbor_node": [
          {
            "node_name": "12",
            "distance": 130
          },
          {
            "node_name": "13",
            "distance": 3800
          },
          {
            "node_name": "44",
            "distance": 6200
          },
          {
            "node_name": "70",
            "distance": 11800
          },
          {
            "node_name": "65",
            "distance": 10200
          }
        ],
        "node_type": "3",
        "position": "Alun-alun Jenggawah"
      },
      {
        "id": "51",
        "node_name": "Ambulu",
        "neighbor_node": [
          {
            "node_name": "2",
            "distance": 550
          },
          {
            "node_name": "4",
            "distance": 4600
          },
          {
            "node_name": "3",
            "distance": 6100
          },
          {
            "node_name": "92",
            "distance": 1200
          },
          {
            "node_name": "57",
            "distance": 6600
          }
        ],
        "node_type": "3",
        "position": "-8.345007, 113.606373"
      },
      {
        "id": "52",
        "node_name": "Arjasa",
        "neighbor_node": [
          {
            "node_name": "5",
            "distance": 4100
          },
          {
            "node_name": "68",
            "distance": 3700
          },
          {
            "node_name": "59",
            "distance": 8300
          }
        ],
        "node_type": "3",
        "position": "-8.129519261574883, 113.7429331004208"
      },
      {
        "id": "54",
        "node_name": "Balung",
        "neighbor_node": [
          {
            "node_name": "47",
            "distance": 7300
          },
          {
            "node_name": "32",
            "distance": 12400
          },
          {
            "node_name": "8",
            "distance": 5000
          },
          {
            "node_name": "89",
            "distance": 2000
          },
          {
            "node_name": "53",
            "distance": 8600
          },
          {
            "node_name": "61",
            "distance": 11800
          },
          {
            "node_name": "57",
            "distance": 13000
          },
          {
            "node_name": "81",
            "distance": 8600
          },
          {
            "node_name": "69",
            "distance": 7600
          }
        ],
        "node_type": "3",
        "position": "-8.276448690262711, 113.53540516449993"
      },
      {
        "id": "53",
        "node_name": "Bangsalsari",
        "neighbor_node": [
          {
            "node_name": "6",
            "distance": 1300
          },
          {
            "node_name": "54",
            "distance": 8600
          },
          {
            "node_name": "70",
            "distance": 7700
          }
        ],
        "node_type": "3",
        "position": "-8.20115523626151, 113.53954493034146"
      },
      {
        "id": "104",
        "node_name": "Golden Market Jember",
        "neighbor_node": [
          {
            "node_name": "91",
            "distance": 2500
          },
          {
            "node_name": "17",
            "distance": 1600
          },
          {
            "node_name": "85",
            "distance": 2500
          },
          {
            "node_name": "103",
            "distance": 900
          },
          {
            "node_name": "95",
            "distance": 1200
          }
        ],
        "node_type": "3",
        "position": "Golden Market Jember"
      },
      {
        "id": "55",
        "node_name": "Gumukmas",
        "neighbor_node": [
          {
            "node_name": "9",
            "distance": 280
          },
          {
            "node_name": "20",
            "distance": 5700
          },
          {
            "node_name": "10",
            "distance": 8300
          },
          {
            "node_name": "80",
            "distance": 13900
          }
        ],
        "node_type": "3",
        "position": "-8.315874, 113.417189"
      },
      {
        "id": "56",
        "node_name": "Jelbuk",
        "neighbor_node": [
          {
            "node_name": "11",
            "distance": 1300
          },
          {
            "node_name": "36",
            "distance": 9200
          }
        ],
        "node_type": "3",
        "position": "-8.06910098514877, 113.76405126666774"
      },
      {
        "id": "57",
        "node_name": "Jenggawah",
        "neighbor_node": [
          {
            "node_name": "13",
            "distance": 230
          },
          {
            "node_name": "51",
            "distance": 6600
          },
          {
            "node_name": "54",
            "distance": 13000
          }
        ],
        "node_type": "3",
        "position": "-8.292363526359457, 113.62959396256515"
      },
      {
        "id": "58",
        "node_name": "Jombang",
        "neighbor_node": [
          {
            "node_name": "14",
            "distance": 4500
          },
          {
            "node_name": "19",
            "distance": 4000
          },
          {
            "node_name": "62",
            "distance": 4100
          }
        ],
        "node_type": "3",
        "position": "-8.255951554764678, 113.33813695759041"
      },
      {
        "id": "59",
        "node_name": "Kalisat",
        "neighbor_node": [
          {
            "node_name": "15",
            "distance": 1300
          },
          {
            "node_name": "90",
            "distance": 2600
          },
          {
            "node_name": "64",
            "distance": 6300
          },
          {
            "node_name": "67",
            "distance": 4500
          },
          {
            "node_name": "52",
            "distance": 8300
          }
        ],
        "node_type": "3",
        "position": "-8.136495257885683, 113.80503065728502"
      },
      {
        "id": "60",
        "node_name": "Kaliwates",
        "neighbor_node": [
          {
            "node_name": "83",
            "distance": 4300
          },
          {
            "node_name": "91",
            "distance": 4000
          },
          {
            "node_name": "84",
            "distance": 4800
          },
          {
            "node_name": "94",
            "distance": 290
          }
        ],
        "node_type": "3",
        "position": "-8.188891, 113.654871"
      },
      {
        "id": "62",
        "node_name": "Kencong",
        "neighbor_node": [
          {
            "node_name": "20",
            "distance": 1500
          },
          {
            "node_name": "38",
            "distance": 17000
          },
          {
            "node_name": "19",
            "distance": 5700
          },
          {
            "node_name": "80",
            "distance": 12400
          },
          {
            "node_name": "58",
            "distance": 4100
          },
          {
            "node_name": "96",
            "distance": 16200
          }
        ],
        "node_type": "3",
        "position": "-8.270493470529322, 113.36351145021683"
      },
      {
        "id": "61",
        "node_name": "Klatakan",
        "neighbor_node": [
          {
            "node_name": "47",
            "distance": 5300
          },
          {
            "node_name": "43",
            "distance": 700
          },
          {
            "node_name": "6",
            "distance": 3900
          },
          {
            "node_name": "78",
            "distance": 5100
          },
          {
            "node_name": "54",
            "distance": 11800
          }
        ],
        "node_type": "3",
        "position": "-8.189576449106982, 113.49525130386577"
      },
      {
        "id": "63",
        "node_name": "Ledokombo",
        "neighbor_node": [
          {
            "node_name": "21",
            "distance": 1000
          },
          {
            "node_name": "Perempatan 63",
            "distance": 3800
          },
          {
            "node_name": "102",
            "distance": 8000
          }
        ],
        "node_type": "3",
        "position": "-8.138775, 113.865768"
      },
      {
        "id": "64",
        "node_name": "Mayang",
        "neighbor_node": [
          {
            "node_name": "25",
            "distance": 3700
          },
          {
            "node_name": "22",
            "distance": 1200
          },
          {
            "node_name": "59",
            "distance": 4500
          },
          {
            "node_name": "100",
            "distance": 8700
          },
          {
            "node_name": "Perempatan 63",
            "distance": 6700
          }
        ],
        "node_type": "3",
        "position": "-8.173742745930083, 113.79457218762266"
      },
      {
        "id": "65",
        "node_name": "Mumbulsari",
        "neighbor_node": [
          {
            "node_name": "23",
            "distance": 5000
          },
          {
            "node_name": "22",
            "distance": 14500
          },
          {
            "node_name": "79",
            "distance": 7700
          },
          {
            "node_name": "97",
            "distance": 10200
          },
          {
            "node_name": "98",
            "distance": 4700
          }
        ],
        "node_type": "3",
        "position": "-8.243436301343161, 113.71144875200898"
      },
      {
        "id": "67",
        "node_name": "Pakusari",
        "neighbor_node": [
          {
            "node_name": "25",
            "distance": 1800
          },
          {
            "node_name": "59",
            "distance": 4500
          },
          {
            "node_name": "99",
            "distance": 5900
          }
        ],
        "node_type": "3",
        "position": "-8.171457013362183, 113.79343027767891"
      },
      {
        "id": "66",
        "node_name": "Panti",
        "neighbor_node": [
          {
            "node_name": "24",
            "distance": 5800
          },
          {
            "node_name": "73",
            "distance": 8400
          },
          {
            "node_name": "94",
            "distance": 8200
          }
        ],
        "node_type": "3",
        "position": "-8.126311940261525, 113.633680214186"
      },
      {
        "id": "68",
        "node_name": "Patrang",
        "neighbor_node": [
          {
            "node_name": "82",
            "distance": 190
          },
          {
            "node_name": "86",
            "distance": 2000
          },
          {
            "node_name": "88",
            "distance": 2000
          },
          {
            "node_name": "52",
            "distance": 3800
          }
        ],
        "node_type": "3",
        "position": "Pos Lalu Lintas 906 Jember"
      },
      {
        "id": "101",
        "node_name": "Perempatan Ledokombo",
        "neighbor_node": [
          {
            "node_name": "63",
            "distance": 3800
          },
          {
            "node_name": "64",
            "distance": 6700
          },
          {
            "node_name": "90",
            "distance": 3600
          },
          {
            "node_name": "100",
            "distance": 4500
          }
        ],
        "node_type": "3",
        "position": "-8.151224, 113.839691"
      },
      {
        "id": "94",
        "node_name": "Perempatan Mangli",
        "neighbor_node": [
          {
            "node_name": "24",
            "distance": 6000
          },
          {
            "node_name": "35",
            "distance": 4700
          },
          {
            "node_name": "18",
            "distance": 1200
          },
          {
            "node_name": "66",
            "distance": 8200
          },
          {
            "node_name": "70",
            "distance": 5300
          },
          {
            "node_name": "73",
            "distance": 4100
          },
          {
            "node_name": "60",
            "distance": 290
          }
        ],
        "node_type": "3",
        "position": "-8.189799, 113.652433"
      },
      {
        "id": "102",
        "node_name": "Perempatan Sukowono",
        "neighbor_node": [
          {
            "node_name": "15",
            "distance": 1000
          },
          {
            "node_name": "39",
            "distance": 16100
          },
          {
            "node_name": "90",
            "distance": 2100
          },
          {
            "node_name": "63",
            "distance": 8000
          },
          {
            "node_name": "74",
            "distance": 12000
          }
        ],
        "node_type": "3",
        "position": "-8.132760633150044, 113.80706502981644"
      },
      {
        "id": "99",
        "node_name": "Perempatan Wirolegi",
        "neighbor_node": [
          {
            "node_name": "67",
            "distance": 5900
          },
          {
            "node_name": "77",
            "distance": 2400
          },
          {
            "node_name": "98",
            "distance": 7600
          }
        ],
        "node_type": "3",
        "position": "-8.187250, 113.746191"
      },
      {
        "id": "98",
        "node_name": "Pertigaan Kranjingan",
        "neighbor_node": [
          {
            "node_name": "18",
            "distance": 5600
          },
          {
            "node_name": "40",
            "distance": 4400
          },
          {
            "node_name": "41",
            "distance": 600
          },
          {
            "node_name": "50",
            "distance": 4800
          },
          {
            "node_name": "65",
            "distance": 4700
          },
          {
            "node_name": "77",
            "distance": 6300
          },
          {
            "node_name": "99",
            "distance": 7600
          },
          {
            "node_name": "104",
            "distance": 4700
          },
          {
            "node_name": "17",
            "distance": 5000
          },
          {
            "node_name": "93",
            "distance": 4400
          }
        ],
        "node_type": "3",
        "position": "-8.212371, 113.692038"
      },
      {
        "id": "96",
        "node_name": "Pertigaan Pondokdalem",
        "neighbor_node": [
          {
            "node_name": "37",
            "distance": 6000
          },
          {
            "node_name": "38",
            "distance": 6000
          },
          {
            "node_name": "42",
            "distance": 900
          },
          {
            "node_name": "62",
            "distance": 16200
          }
        ],
        "node_type": "3",
        "position": "-8.148445, 113.430556"
      },
      {
        "id": "100",
        "node_name": "Pertigaan Sempolan",
        "neighbor_node": [
          {
            "node_name": "33",
            "distance": 2000
          },
          {
            "node_name": "34",
            "distance": 7500
          },
          {
            "node_name": "64",
            "distance": 8700
          },
          {
            "node_name": "Perempatan 63",
            "distance": 4500
          }
        ],
        "node_type": "3",
        "position": "-8.180039, 113.862389"
      },
      {
        "id": "1",
        "node_name": "Ps-Ajung Jember",
        "neighbor_node": [
          {
            "node_name": "12",
            "distance": 3900
          },
          {
            "node_name": "50",
            "distance": 550
          }
        ],
        "node_type": "1",
        "position": "Ps-Ajung Jember"
      },
      {
        "id": "2",
        "node_name": "Ps-Ambulu Jember",
        "neighbor_node": [
          {
            "node_name": "3",
            "distance": 5600
          },
          {
            "node_name": "51",
            "distance": 550
          }
        ],
        "node_type": "1",
        "position": "Ps-Ambulu Jember"
      },
      {
        "id": "3",
        "node_name": "Ps-Andongsari Jember",
        "neighbor_node": [
          {
            "node_name": "2",
            "distance": 5600
          },
          {
            "node_name": "45",
            "distance": 12200
          },
          {
            "node_name": "51",
            "distance": 6100
          }
        ],
        "node_type": "1",
        "position": "Ps-Andongsari Jember"
      },
      {
        "id": "5",
        "node_name": "Ps-Arjasa Jember",
        "neighbor_node": [
          {
            "node_name": "11",
            "distance": 1800
          },
          {
            "node_name": "52",
            "distance": 4100
          }
        ],
        "node_type": "1",
        "position": "Ps-Arjasa Jember"
      },
      {
        "id": "7",
        "node_name": "Ps-Balung Jember",
        "neighbor_node": [
          {
            "node_name": "31",
            "distance": 4700
          },
          {
            "node_name": "89",
            "distance": 850
          },
          {
            "node_name": "70",
            "distance": 9800
          }
        ],
        "node_type": "1",
        "position": "Ps-Balung Jember"
      },
      {
        "id": "6",
        "node_name": "Ps-Bangsalsari Jember",
        "neighbor_node": [
          {
            "node_name": "43",
            "distance": 4600
          },
          {
            "node_name": "61",
            "distance": 3900
          },
          {
            "node_name": "53",
            "distance": 1000
          }
        ],
        "node_type": "1",
        "position": "Ps-Bangsalsari Jember"
      },
      {
        "id": "27",
        "node_name": "Ps-Banjarsengon Jember",
        "neighbor_node": [
          {
            "node_name": "82",
            "distance": 6100
          },
          {
            "node_name": "88",
            "distance": 4500
          },
          {
            "node_name": "73",
            "distance": 5200
          },
          {
            "node_name": "95",
            "distance": 5700
          }
        ],
        "node_type": "1",
        "position": "Ps-Banjarsengon Jember"
      },
      {
        "id": "19",
        "node_name": "Ps-Cakru Jember",
        "neighbor_node": [
          {
            "node_name": "62",
            "distance": 5700
          },
          {
            "node_name": "58",
            "distance": 3900
          }
        ],
        "node_type": "1",
        "position": "Ps-Cakru Jember"
      },
      {
        "id": "45",
        "node_name": "Ps-Curahnongko Jember",
        "neighbor_node": [
          {
            "node_name": "3",
            "distance": 12200
          },
          {
            "node_name": "79",
            "distance": 17600
          }
        ],
        "node_type": "1",
        "position": "Ps-Curahnongko Jember"
      },
      {
        "id": "41",
        "node_name": "Ps-Gladak Pakem Jember",
        "neighbor_node": [
          {
            "node_name": "16",
            "distance": 900
          },
          {
            "node_name": "40",
            "distance": 4200
          },
          {
            "node_name": "77",
            "distance": 6100
          },
          {
            "node_name": "98",
            "distance": 600
          }
        ],
        "node_type": "1",
        "position": "Ps-Gladak Pakem Jember"
      },
      {
        "id": "9",
        "node_name": "Ps-Gumukmas Jember",
        "neighbor_node": [
          {
            "node_name": "29",
            "distance": 8200
          },
          {
            "node_name": "55",
            "distance": 280
          }
        ],
        "node_type": "1",
        "position": "Ps-Gumukmas Jember"
      },
      {
        "id": "11",
        "node_name": "Ps-Jelbuk Jember",
        "neighbor_node": [
          {
            "node_name": "5",
            "distance": 1800
          },
          {
            "node_name": "56",
            "distance": 1300
          }
        ],
        "node_type": "1",
        "position": "Ps-Jelbuk Jember"
      },
      {
        "id": "17",
        "node_name": "Ps-Jember Kidul Jember",
        "neighbor_node": [
          {
            "node_name": "93",
            "distance": 550
          },
          {
            "node_name": "85",
            "distance": 1000
          },
          {
            "node_name": "95",
            "distance": 2600
          },
          {
            "node_name": "98",
            "distance": 5000
          }
        ],
        "node_type": "1",
        "position": "Ps-Jember Kidul Jember"
      },
      {
        "id": "12",
        "node_name": "Ps-Jenggawah Jember",
        "neighbor_node": [
          {
            "node_name": "1",
            "distance": 3900
          },
          {
            "node_name": "50",
            "distance": 6300
          },
          {
            "node_name": "97",
            "distance": 130
          }
        ],
        "node_type": "1",
        "position": "Ps-Jenggawah Jember"
      },
      {
        "id": "14",
        "node_name": "Ps-Jombang Jember",
        "neighbor_node": [
          {
            "node_name": "58",
            "distance": 4500
          }
        ],
        "node_type": "1",
        "position": "Ps-Jombang Jember"
      },
      {
        "id": "15",
        "node_name": "Ps-Kalisat Jember",
        "neighbor_node": [
          {
            "node_name": "90",
            "distance": 1300
          },
          {
            "node_name": "59",
            "distance": 1400
          },
          {
            "node_name": "102",
            "distance": 1000
          }
        ],
        "node_type": "1",
        "position": "Ps-Kalisat Jember"
      },
      {
        "id": "16",
        "node_name": "Ps-Kaliwates Jember",
        "neighbor_node": [
          {
            "node_name": "40",
            "distance": 3500
          },
          {
            "node_name": "41",
            "distance": 900
          },
          {
            "node_name": "77",
            "distance": 5400
          }
        ],
        "node_type": "1",
        "position": "Ps-Kaliwates Jember"
      },
      {
        "id": "8",
        "node_name": "Ps-Karangduren Jember",
        "neighbor_node": [
          {
            "node_name": "54",
            "distance": 5000
          },
          {
            "node_name": "80",
            "distance": 10600
          }
        ],
        "node_type": "1",
        "position": "Ps-Karangduren Jember"
      },
      {
        "id": "29",
        "node_name": "Ps-Kasiyan Jember",
        "neighbor_node": [
          {
            "node_name": "9",
            "distance": 8200
          },
          {
            "node_name": "69",
            "distance": 100
          }
        ],
        "node_type": "1",
        "position": "Ps-Kasiyan Jember"
      },
      {
        "id": "13",
        "node_name": "Ps-Kemuningsari Kidul Jember",
        "neighbor_node": [
          {
            "node_name": "57",
            "distance": 230
          },
          {
            "node_name": "97",
            "distance": 3800
          }
        ],
        "node_type": "1",
        "position": "Ps-Kemuningsari Kidul Jember"
      },
      {
        "id": "20",
        "node_name": "Ps-Kencong Jember",
        "neighbor_node": [
          {
            "node_name": "62",
            "distance": 1500
          },
          {
            "node_name": "55",
            "distance": 5700
          }
        ],
        "node_type": "1",
        "position": "Ps-Kencong Jember"
      },
      {
        "id": "43",
        "node_name": "Ps-Klatakan Jember",
        "neighbor_node": [
          {
            "node_name": "6",
            "distance": 4600
          },
          {
            "node_name": "61",
            "distance": 700
          }
        ],
        "node_type": "1",
        "position": "Ps-Klatakan Jember"
      },
      {
        "id": "21",
        "node_name": "Ps-Ledokombo Jember",
        "neighbor_node": [
          {
            "node_name": "39",
            "distance": 5600
          },
          {
            "node_name": "63",
            "distance": 1000
          }
        ],
        "node_type": "1",
        "position": "Ps-Ledokombo Jember"
      },
      {
        "id": "49",
        "node_name": "Ps-Lojejer Jember",
        "neighbor_node": [
          {
            "node_name": "28",
            "distance": 5400
          },
          {
            "node_name": "81",
            "distance": 8000
          }
        ],
        "node_type": "1",
        "position": "Ps-Lojejer Jember"
      },
      {
        "id": "18",
        "node_name": "Ps-Mangli Jember",
        "neighbor_node": [
          {
            "node_name": "93",
            "distance": 5800
          },
          {
            "node_name": "50",
            "distance": 1800
          },
          {
            "node_name": "98",
            "distance": 5600
          },
          {
            "node_name": "94",
            "distance": 1200
          }
        ],
        "node_type": "1",
        "position": "Ps-Mangli Jember"
      },
      {
        "id": "22",
        "node_name": "Ps-Mayang Jember",
        "neighbor_node": [
          {
            "node_name": "23",
            "distance": 12200
          },
          {
            "node_name": "65",
            "distance": 15100
          },
          {
            "node_name": "64",
            "distance": 2300
          }
        ],
        "node_type": "1",
        "position": "Ps-Mayang Jember"
      },
      {
        "id": "23",
        "node_name": "Ps-Mumbulsari Jember",
        "neighbor_node": [
          {
            "node_name": "22",
            "distance": 12200
          },
          {
            "node_name": "65",
            "distance": 5500
          }
        ],
        "node_type": "1",
        "position": "Ps-Mumbulsari Jember"
      },
      {
        "id": "31",
        "node_name": "Ps-Nogosari Jember",
        "neighbor_node": [
          {
            "node_name": "7",
            "distance": 4700
          },
          {
            "node_name": "70",
            "distance": 8700
          }
        ],
        "node_type": "1",
        "position": "Ps-Nogosari Jember"
      },
      {
        "id": "25",
        "node_name": "Ps-Pakusari Jember",
        "neighbor_node": [
          {
            "node_name": "67",
            "distance": 1800
          },
          {
            "node_name": "64",
            "distance": 2100
          }
        ],
        "node_type": "1",
        "position": "Ps-Pakusari Jember"
      },
      {
        "id": "47",
        "node_name": "Ps-Paleran Jember",
        "neighbor_node": [
          {
            "node_name": "32",
            "distance": 5100
          },
          {
            "node_name": "61",
            "distance": 5300
          },
          {
            "node_name": "54",
            "distance": 7300
          }
        ],
        "node_type": "1",
        "position": "Ps-Paleran Jember"
      },
      {
        "id": "24",
        "node_name": "Ps-Panti Jember",
        "neighbor_node": [
          {
            "node_name": "66",
            "distance": 5800
          },
          {
            "node_name": "73",
            "distance": 5500
          },
          {
            "node_name": "94",
            "distance": 6000
          }
        ],
        "node_type": "1",
        "position": "Ps-Panti Jember"
      },
      {
        "id": "26",
        "node_name": "Ps-Patrang Jember",
        "neighbor_node": [
          {
            "node_name": "83",
            "distance": 1100
          },
          {
            "node_name": "91",
            "distance": 1800
          },
          {
            "node_name": "95",
            "distance": 4400
          },
          {
            "node_name": "73",
            "distance": 3200
          }
        ],
        "node_type": "1",
        "position": "Ps-Patrang Jember"
      },
      {
        "id": "28",
        "node_name": "Ps-Puger Jember",
        "neighbor_node": [
          {
            "node_name": "49",
            "distance": 5400
          },
          {
            "node_name": "69",
            "distance": 5200
          }
        ],
        "node_type": "1",
        "position": "Ps-Puger Jember"
      },
      {
        "id": "30",
        "node_name": "Ps-Rambipuji Jember",
        "neighbor_node": [
          {
            "node_name": "70",
            "distance": 500
          }
        ],
        "node_type": "1",
        "position": "Ps-Rambipuji Jember"
      },
      {
        "id": "38",
        "node_name": "Ps-Rowotengah Jember",
        "neighbor_node": [
          {
            "node_name": "37",
            "distance": 8900
          },
          {
            "node_name": "62",
            "distance": 22200
          },
          {
            "node_name": "96",
            "distance": 6000
          }
        ],
        "node_type": "1",
        "position": "Ps-Rowotengah Jember"
      },
      {
        "id": "4",
        "node_name": "Ps-Sabrang Jember",
        "neighbor_node": [
          {
            "node_name": "51",
            "distance": 4600
          }
        ],
        "node_type": "1",
        "position": "Ps-Sabrang Jember"
      },
      {
        "id": "32",
        "node_name": "Ps-Semboro Jember",
        "neighbor_node": [
          {
            "node_name": "47",
            "distance": 5100
          },
          {
            "node_name": "71",
            "distance": 4800
          },
          {
            "node_name": "54",
            "distance": 12400
          }
        ],
        "node_type": "1",
        "position": "Ps-Semboro Jember"
      },
      {
        "id": "33",
        "node_name": "Ps-Silo 1 Jember",
        "neighbor_node": [
          {
            "node_name": "34",
            "distance": 7400
          },
          {
            "node_name": "72",
            "distance": 3900
          },
          {
            "node_name": "100",
            "distance": 2000
          }
        ],
        "node_type": "1",
        "position": "Ps-Silo 1 Jember"
      },
      {
        "id": "34",
        "node_name": "Ps-Silo 2 Jember",
        "neighbor_node": [
          {
            "node_name": "33",
            "distance": 7400
          },
          {
            "node_name": "100",
            "distance": 7500
          }
        ],
        "node_type": "1",
        "position": "Ps-Silo 2 Jember"
      },
      {
        "id": "35",
        "node_name": "Ps-Sukorambi Jember",
        "neighbor_node": [
          {
            "node_name": "83",
            "distance": 2900
          },
          {
            "node_name": "73",
            "distance": 220
          },
          {
            "node_name": "94",
            "distance": 4700
          }
        ],
        "node_type": "1",
        "position": "Ps-Sukorambi Jember"
      },
      {
        "id": "36",
        "node_name": "Ps-Sukowono Jember",
        "neighbor_node": [
          {
            "node_name": "74",
            "distance": 750
          },
          {
            "node_name": "56",
            "distance": 9200
          }
        ],
        "node_type": "1",
        "position": "Ps-Sukowono Jember"
      },
      {
        "id": "37",
        "node_name": "Ps-Sumberbaru Jember",
        "neighbor_node": [
          {
            "node_name": "38",
            "distance": 8800
          },
          {
            "node_name": "75",
            "distance": 100
          },
          {
            "node_name": "96",
            "distance": 6000
          }
        ],
        "node_type": "1",
        "position": "Ps-Sumberbaru Jember"
      },
      {
        "id": "39",
        "node_name": "Ps-Sumberjambe Jember",
        "neighbor_node": [
          {
            "node_name": "21",
            "distance": 5600
          },
          {
            "node_name": "76",
            "distance": 3500
          },
          {
            "node_name": "102",
            "distance": 16100
          }
        ],
        "node_type": "1",
        "position": "Ps-Sumberjambe Jember"
      },
      {
        "id": "40",
        "node_name": "Ps-Sumbersari Jember",
        "neighbor_node": [
          {
            "node_name": "16",
            "distance": 3500
          },
          {
            "node_name": "41",
            "distance": 4200
          },
          {
            "node_name": "77",
            "distance": 2100
          },
          {
            "node_name": "98",
            "distance": 4400
          },
          {
            "node_name": "87",
            "distance": 2400
          },
          {
            "node_name": "104",
            "distance": 850
          }
        ],
        "node_type": "1",
        "position": "Ps-Sumbersari Jember"
      },
      {
        "id": "42",
        "node_name": "Ps-Tanggul Jember",
        "neighbor_node": [
          {
            "node_name": "78",
            "distance": 2800
          },
          {
            "node_name": "96",
            "distance": 900
          }
        ],
        "node_type": "1",
        "position": "Ps-Tanggul Jember"
      },
      {
        "id": "10",
        "node_name": "Ps-Tembokrejo Jember",
        "neighbor_node": [
          {
            "node_name": "80",
            "distance": 6700
          },
          {
            "node_name": "55",
            "distance": 8300
          }
        ],
        "node_type": "1",
        "position": "Ps-Tembokrejo Jember"
      },
      {
        "id": "44",
        "node_name": "Ps-Tempurejo Jember",
        "neighbor_node": [
          {
            "node_name": "79",
            "distance": 650
          },
          {
            "node_name": "97",
            "distance": 6200
          }
        ],
        "node_type": "1",
        "position": "Ps-Tempurejo Jember"
      },
      {
        "id": "46",
        "node_name": "Ps-Umbulsari Jember",
        "neighbor_node": [
          {
            "node_name": "80",
            "distance": 5000
          }
        ],
        "node_type": "1",
        "position": "Ps-Umbulsari Jember"
      },
      {
        "id": "48",
        "node_name": "Ps-Wuluhan Jember",
        "neighbor_node": [
          {
            "node_name": "92",
            "distance": 5300
          },
          {
            "node_name": "81",
            "distance": 500
          }
        ],
        "node_type": "1",
        "position": "Ps-Wuluhan Jember"
      },
      {
        "id": "69",
        "node_name": "Puger",
        "neighbor_node": [
          {
            "node_name": "29",
            "distance": 100
          },
          {
            "node_name": "28",
            "distance": 5200
          },
          {
            "node_name": "81",
            "distance": 9700
          },
          {
            "node_name": "54",
            "distance": 7600
          }
        ],
        "node_type": "3",
        "position": "-8.317463, 113.482550"
      },
      {
        "id": "70",
        "node_name": "Rambipuji",
        "neighbor_node": [
          {
            "node_name": "30",
            "distance": 500
          },
          {
            "node_name": "31",
            "distance": 8700
          },
          {
            "node_name": "7",
            "distance": 9800
          },
          {
            "node_name": "53",
            "distance": 7700
          },
          {
            "node_name": "94",
            "distance": 5300
          },
          {
            "node_name": "97",
            "distance": 11800
          }
        ],
        "node_type": "3",
        "position": "-8.20692830852696, 113.60746198481475"
      },
      {
        "id": "89",
        "node_name": "Rs-Balung Jember",
        "neighbor_node": [
          {
            "node_name": "7",
            "distance": 850
          },
          {
            "node_name": "54",
            "distance": 2000
          }
        ],
        "node_type": "2",
        "position": "Rs-Balung Jember"
      },
      {
        "id": "85",
        "node_name": "Rs-Bina Sehat Jember",
        "neighbor_node": [
          {
            "node_name": "17",
            "distance": 1000
          },
          {
            "node_name": "84",
            "distance": 1500
          },
          {
            "node_name": "93",
            "distance": 1100
          },
          {
            "node_name": "91",
            "distance": 1200
          },
          {
            "node_name": "95",
            "distance": 3100
          }
        ],
        "node_type": "2",
        "position": "Rs-Bina Sehat Jember"
      },
      {
        "id": "83",
        "node_name": "Rs-Citra Husada Jember",
        "neighbor_node": [
          {
            "node_name": "35",
            "distance": 2900
          },
          {
            "node_name": "26",
            "distance": 1100
          },
          {
            "node_name": "91",
            "distance": 2700
          },
          {
            "node_name": "73",
            "distance": 2800
          },
          {
            "node_name": "60",
            "distance": 5800
          }
        ],
        "node_type": "2",
        "position": "Rs-Citra Husada Jember"
      },
      {
        "id": "86",
        "node_name": "Rs-DKT Jember",
        "neighbor_node": [
          {
            "node_name": "87",
            "distance": 2200
          },
          {
            "node_name": "88",
            "distance": 700
          },
          {
            "node_name": "68",
            "distance": 1900
          },
          {
            "node_name": "103",
            "distance": 1300
          }
        ],
        "node_type": "2",
        "position": "Rs-DKT Jember"
      },
      {
        "id": "82",
        "node_name": "Rs-Dr.Soebandi Jember",
        "neighbor_node": [
          {
            "node_name": "27",
            "distance": 6100
          },
          {
            "node_name": "68",
            "distance": 260
          },
          {
            "node_name": "73",
            "distance": 8000
          }
        ],
        "node_type": "2",
        "position": "Rs-Dr.Soebandi Jember"
      },
      {
        "id": "87",
        "node_name": "Rs-Jember Klinik Jember",
        "neighbor_node": [
          {
            "node_name": "86",
            "distance": 600
          },
          {
            "node_name": "95",
            "distance": 1000
          },
          {
            "node_name": "40",
            "distance": 2500
          },
          {
            "node_name": "103",
            "distance": 800
          }
        ],
        "node_type": "2",
        "position": "Rs-Jember Klinik Jember"
      },
      {
        "id": "90",
        "node_name": "Rs-Kalisat Jember",
        "neighbor_node": [
          {
            "node_name": "15",
            "distance": 1300
          },
          {
            "node_name": "59",
            "distance": 2500
          },
          {
            "node_name": "Perempatan 63",
            "distance": 3600
          },
          {
            "node_name": "102",
            "distance": 2100
          }
        ],
        "node_type": "2",
        "position": "Rs-Kalisat Jember"
      },
      {
        "id": "84",
        "node_name": "Rs-Kaliwates Jember",
        "neighbor_node": [
          {
            "node_name": "85",
            "distance": 2700
          },
          {
            "node_name": "91",
            "distance": 1900
          },
          {
            "node_name": "60",
            "distance": 2400
          }
        ],
        "node_type": "2",
        "position": "Rs-Kaliwates Jember"
      },
      {
        "id": "88",
        "node_name": "Rs-Paru Jember",
        "neighbor_node": [
          {
            "node_name": "27",
            "distance": 4500
          },
          {
            "node_name": "86",
            "distance": 700
          },
          {
            "node_name": "68",
            "distance": 1900
          }
        ],
        "node_type": "2",
        "position": "Rs-Paru Jember"
      },
      {
        "id": "91",
        "node_name": "Rs-Siloam Jember",
        "neighbor_node": [
          {
            "node_name": "26",
            "distance": 1800
          },
          {
            "node_name": "83",
            "distance": 2900
          },
          {
            "node_name": "85",
            "distance": 1600
          },
          {
            "node_name": "84",
            "distance": 2500
          },
          {
            "node_name": "60",
            "distance": 4700
          },
          {
            "node_name": "95",
            "distance": 2100
          }
        ],
        "node_type": "2",
        "position": "Rs-Siloam Jember"
      },
      {
        "id": "93",
        "node_name": "Rs-Srikandi Ibi Jember",
        "neighbor_node": [
          {
            "node_name": "17",
            "distance": 550
          },
          {
            "node_name": "18",
            "distance": 5800
          },
          {
            "node_name": "85",
            "distance": 1100
          },
          {
            "node_name": "98",
            "distance": 4400
          }
        ],
        "node_type": "2",
        "position": "Rs-Srikandi Ibi Jember"
      },
      {
        "id": "92",
        "node_name": "Rs-Utama Husada Jember",
        "neighbor_node": [
          {
            "node_name": "48",
            "distance": 5300
          },
          {
            "node_name": "51",
            "distance": 1200
          }
        ],
        "node_type": "2",
        "position": "Rs-Utama Husada Jember"
      },
      {
        "id": "71",
        "node_name": "Semboro",
        "neighbor_node": [
          {
            "node_name": "32",
            "distance": 4800
          },
          {
            "node_name": "78",
            "distance": 2500
          },
          {
            "node_name": "80",
            "distance": 5700
          }
        ],
        "node_type": "3",
        "position": "-8.180010850014144, 113.44965723846896"
      },
      {
        "id": "72",
        "node_name": "Silo",
        "neighbor_node": [
          {
            "node_name": "33",
            "distance": 3900
          }
        ],
        "node_type": "3",
        "position": "-8.210130, 113.891676"
      },
      {
        "id": "103",
        "node_name": "SPBU Ahmad Yani Jember",
        "neighbor_node": [
          {
            "node_name": "40",
            "distance": 800
          },
          {
            "node_name": "104",
            "distance": 500
          },
          {
            "node_name": "98",
            "distance": 4700
          }
        ],
        "node_type": "3",
        "position": "SPBU Ahmad Yani Jember"
      },
      {
        "id": "73",
        "node_name": "Sukorambi",
        "neighbor_node": [
          {
            "node_name": "24",
            "distance": 5500
          },
          {
            "node_name": "26",
            "distance": 3200
          },
          {
            "node_name": "27",
            "distance": 5200
          },
          {
            "node_name": "35",
            "distance": 220
          },
          {
            "node_name": "82",
            "distance": 7900
          },
          {
            "node_name": "83",
            "distance": 2700
          },
          {
            "node_name": "94",
            "distance": 4100
          },
          {
            "node_name": "66",
            "distance": 8400
          }
        ],
        "node_type": "3",
        "position": "-8.157510382343755, 113.66609659737821"
      },
      {
        "id": "74",
        "node_name": "Sukowono",
        "neighbor_node": [
          {
            "node_name": "36",
            "distance": 750
          },
          {
            "node_name": "76",
            "distance": 9100
          },
          {
            "node_name": "102",
            "distance": 12000
          }
        ],
        "node_type": "3",
        "position": "-8.057736173165274, 113.83505378646856"
      },
      {
        "id": "75",
        "node_name": "Sumberbaru",
        "neighbor_node": [
          {
            "node_name": "37",
            "distance": 100
          }
        ],
        "node_type": "3",
        "position": "-8.119017939780537, 113.3928456844137"
      },
      {
        "id": "76",
        "node_name": "Sumberjambe",
        "neighbor_node": [
          {
            "node_name": "39",
            "distance": 3500
          },
          {
            "node_name": "74",
            "distance": 8300
          }
        ],
        "node_type": "3",
        "position": "-8.073146984720433, 113.89885225563495"
      },
      {
        "id": "77",
        "node_name": "Sumbersari",
        "neighbor_node": [
          {
            "node_name": "41",
            "distance": 6100
          },
          {
            "node_name": "16",
            "distance": 5200
          },
          {
            "node_name": "40",
            "distance": 2100
          },
          {
            "node_name": "98",
            "distance": 6300
          },
          {
            "node_name": "99",
            "distance": 2400
          }
        ],
        "node_type": "3",
        "position": "-8.184999, 113.724465"
      },
      {
        "id": "78",
        "node_name": "Tanggul",
        "neighbor_node": [
          {
            "node_name": "42",
            "distance": 2800
          },
          {
            "node_name": "61",
            "distance": 5100
          },
          {
            "node_name": "71",
            "distance": 2500
          }
        ],
        "node_type": "3",
        "position": "-8.16507003554795, 113.45782902260177"
      },
      {
        "id": "79",
        "node_name": "Tempurejo",
        "neighbor_node": [
          {
            "node_name": "44",
            "distance": 650
          },
          {
            "node_name": "45",
            "distance": 17600
          },
          {
            "node_name": "65",
            "distance": 7100
          }
        ],
        "node_type": "3",
        "position": "-8.300668343783014, 113.68847061789661"
      },
      {
        "id": "80",
        "node_name": "Umbulsari",
        "neighbor_node": [
          {
            "node_name": "46",
            "distance": 5000
          },
          {
            "node_name": "10",
            "distance": 6700
          },
          {
            "node_name": "8",
            "distance": 10600
          },
          {
            "node_name": "55",
            "distance": 13900
          },
          {
            "node_name": "62",
            "distance": 12400
          },
          {
            "node_name": "71",
            "distance": 5700
          }
        ],
        "node_type": "3",
        "position": "-8.226259813899466, 113.43726518360315"
      },
      {
        "id": "81",
        "node_name": "Wuluhan",
        "neighbor_node": [
          {
            "node_name": "48",
            "distance": 500
          },
          {
            "node_name": "49",
            "distance": 8000
          },
          {
            "node_name": "54",
            "distance": 8600
          },
          {
            "node_name": "69",
            "distance": 9700
          }
        ],
        "node_type": "3",
        "position": "-8.335753, 113.549908"
      }
    ],
    node_types:[
      {
        "id": "1",
        "type_name": "Puskesmas"
      },
      {
        "id": "2",
        "type_name": "Rumah Sakit"
      },
      {
        "id": "3",
        "type_name": "Kecamatan"
      },
      {
        "id": "4",
        "type_name": "Persimpangan"
      }
    ]
  },
  reducers: {
    
  }
})

export const actions = states.actions;
const store = configureStore({
  reducer : states.reducer
})

export default store;