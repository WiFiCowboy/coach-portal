export default {
  "managers": [
    {
      "id": 1,
      "name": "Manager A",
      "hpc": 2.98,
      "voc": 100,
      "atnd": 138,
      "aiq": 96
    },
    {
      "id": 2,
      "name": "Manager B",
      "hpc": 3.15,
      "voc": 92.85,
      "atnd": 300,
      "aiq": 93.5
    },
    {
      "id": 3,
      "name": "Manager C",
      "hpc": 2.98,
      "voc": 89,
      "atnd": 300,
      "aiq": 82
    },
  ],
  "hpc": [
    {
      "id": 1,
      "managerId": 1,
      "name": "manager",
      "hpc": 2.98,
      "goal": 3.00,
      "variance": .02,
      "varPercent": .67,
      "de": 80,
      "productivity": 82,
    },
  ],
  "voc": [
    {
      "id": 1,
      "managerId": 1,
      "name": "manager",
      "voc": 100,
      "aiq": 96,
    }
  ],
  "atnd": [
    {
      "id": 1,
      "managerId": 1,
      "name": "manager",
      "atnd": 138,
      "productivity": 82,
      "earnedHrs": 410,
      "totalHrs": 500,
    }
  ]
}