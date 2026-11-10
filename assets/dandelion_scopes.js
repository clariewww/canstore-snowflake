(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CANSTORE_SCOPES = api;
})(typeof window === 'object' ? window : globalThis, function () {
  'use strict';
  // Reviewed assignments from CANSTORE-current-scopes_LL.xlsx, supplied 2026-11-10.
  // Join by publication ID. Preserve original CSV records and authorship separately.
  // Scope membership does not establish a publication-to-workstream association.
  const groups = [
  {
    "label": "Catalyst design",
    "shortLabel": "Catalyst design",
    "ids": [
      "1",
      "7",
      "19",
      "23",
      "28",
      "31",
      "32",
      "35",
      "42",
      "68",
      "71",
      "74",
      "75"
    ]
  },
  {
    "label": "Electrolyzer optimization",
    "shortLabel": "Electrolyzer optimization",
    "ids": [
      "2",
      "3",
      "6",
      "8",
      "9",
      "15",
      "17",
      "18",
      "21",
      "22",
      "24",
      "27",
      "30",
      "33",
      "36",
      "38",
      "39",
      "40",
      "43",
      "70",
      "76"
    ]
  },
  {
    "label": "Optimizing C2+ production",
    "shortLabel": "Optimizing C2+ production",
    "ids": [
      "4",
      "5",
      "12",
      "14",
      "16",
      "20",
      "26",
      "29",
      "45",
      "46",
      "72",
      "73"
    ]
  },
  {
    "label": "Cement electrolyzer",
    "shortLabel": "Cement electrolyzer",
    "ids": [
      "10",
      "11",
      "34",
      "41",
      "69"
    ]
  },
  {
    "label": "CCCUS review",
    "shortLabel": "CCCUS review",
    "ids": [
      "13"
    ]
  },
  {
    "label": "Technoeconomic Analysis",
    "shortLabel": "Technoeconomic Analysis",
    "ids": [
      "25"
    ]
  },
  {
    "label": "Scaling electrolyzer",
    "shortLabel": "Scaling electrolyzer",
    "ids": [
      "37",
      "67"
    ]
  },
  {
    "label": "Solid oxide electrolyzer",
    "shortLabel": "Solid oxide electrolyzer",
    "ids": [
      "44"
    ]
  },
  {
    "label": "Energy systems & governance",
    "shortLabel": "Energy & governance",
    "ids": [
      "47",
      "48",
      "49",
      "51",
      "52",
      "56",
      "57",
      "59",
      "66"
    ]
  },
  {
    "label": "Carbon conversion & CCUS",
    "shortLabel": "Carbon conversion & CCUS",
    "ids": [
      "50",
      "65"
    ]
  },
  {
    "label": "Community engagement & rights",
    "shortLabel": "Community & rights",
    "ids": [
      "53",
      "55",
      "60",
      "62",
      "63"
    ]
  },
  {
    "label": "Transdisciplinary & place-based research",
    "shortLabel": "Research approaches",
    "ids": [
      "54",
      "64"
    ]
  },
  {
    "label": "Community energy transition",
    "shortLabel": "Community energy transition",
    "ids": [
      "58",
      "61"
    ]
  }
];
  const byId = new Map(groups.flatMap(group => group.ids.map(id => [id, group])));
  function getScopeInfo(output) {
    const originalScope = String(output.scope || '').trim();
    const group = byId.get(String(output.publication_id));
    if (group) return {label:group.label, shortLabel:group.shortLabel,
      provisional:false, needsReview:false, reviewed:true, originalScope};
    const label = originalScope || `Unassigned · ${String(output.subteam || '').replaceAll(';', ' + ')}`;
    return {label, shortLabel:label, provisional:false, needsReview:false, reviewed:false, originalScope};
  }
  return {getScopeInfo};
});
