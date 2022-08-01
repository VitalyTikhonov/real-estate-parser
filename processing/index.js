import { sourcePropNameMap, VitaliksDataset } from '../configs/datasets.js'

export function processData(data) {
  return data.map((item) => new VitaliksDataset(item))
}
