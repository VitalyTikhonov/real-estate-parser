export const sourcePropNameMap = [
  ["ID  объявления", "id"],
  ["Количество комнат", "roomNumber"],
  ["Тип", "type"],
  ["Метро", "metro"],
  ["Адрес", "address"],
  ["Площадь, м2", "area"],
  ["Дом", "buildingData"],
  ["Парковка", "carPark"],
  ["Цена", "price"],
  ["Телефоны", "phoneNumbers"],
  ["Описание", "description"],
  ["Ремонт", "decoration"],
  ["Площадь комнат, м2", "roomArea"],
  ["Балкон", "balcony"],
  ["Окна", "windowsFacing"],
  ["Санузел", "sanitaryFacilities"],
  ["Можно с детьми/животными", "kidsPetsAllowed"],
  ["Дополнительно", "equipment"],
  ["Название ЖК", "residentialDevelopment"],
  ["Серия дома", "buildingSeries"],
  ["Высота потолков, м", "height"],
  ["Лифт", "elevator"],
  ["Мусоропровод", "rubbishChute"],
  ["Ссылка на объявление", "link"]
]

export const irinasDataset = [
  ['negotiation', 'звонок', 'суть разговора по телеф '],
  ['viewing', 'просмотр', 'итог просмотра квартиры'],
  ['priority', 'приоритет', 'в какой последовательности рассматривать объекты'],
  ['district', 'район', 'в каком районе Москвы находится объект'],
  ['address', 'Адрес', 'улица, дом, корпус или строение'],
  ['price', 'ЦЕНА', 'цена в объявлении'],
  ['duration', 'срок аренды', ' '],
  ['description', 'ТЕКСТ', 'описание из объявления'],
  ['postAuthor', 'автор', 'имя или ID'],
  ['postData', 'дата', 'дата первой публикации объявления'],
  ['metro', 'метро', 'ближайшее или удобнейшее метро'],
  ['onFootToMetro', 'пеш до метро', 'минут идти до ближайшего метро от снимаего жилья'],
  ['timeToLocationA', 'тр до раб Вит', 'минут добираться транспортом до Ньюто Плазы'],
  ['timeToLocationB', 'тр до м.Перв', 'минут добираться транспортом до метро Первомайская'],
  ['area', 'метраж общ', 'общая площадь квартиры'],
  ['floor', 'этаж', 'этаж квартиры'],
  ['buildingHeight', 'из', 'этажей в доме'],
  ['isOuterMostFloor', 'крайние этажи', 'первый, последний или не первый и не последний'],
  ['priceHistory', 'Цена - изменения', 'как менялась цена (падала, росла и с каких значений)'],
  ['commentA', 'примеч1', 'отмечаю подозрительных агентов'],
  ['commentB', 'примеч2', 'ставлю пометку, что сдано и сколько времени искали жильцов'],
  ['phone', 'телеф полный', 'телефон агента из скачанного файла '],
  ['downloadDate', 'дата скачив', 'вношу сама дату, когда скачивала информацию из '],
  ['link', 'источник', 'интернет-ссылка на объявление из скачанного файла '],
  ['feePercentage', 'коммис', 'только число с %'],
  ['deposit', 'залог', 'только число'],
  ['feeAmount', 'агенту', 'сколько в рублях заплатить агенту (только число)'],
  ['totalAmountAtSignature', 'Ит сразу', 'сколько в рублях заплатить хозяину и агенту в день подписания договора (только число)'],
  ['totalAmountPerYear', 'за год', 'сколько придется выложить из своего кармана за год, включая залог и оплату услуг агента'],
  ['', 'Метраж и кухня', 'из скачанного файла '],
  ['', 'Этаж, дом', 'из скачанного файла '],
  ['', 'Парковка', 'из скачанного файла '],
  ['', 'Ремонт', 'из скачанного файла '],
  ['', 'Площ комн', 'из скачанного файла '],
  ['', 'Балк', 'из скачанного файла '],
  ['', 'Окна', 'из скачанного файла '],
  ['', 'С/У', 'из скачанного файла '],
  ['', 'Состав', 'из скачанного файла '],
  ['', 'Заполненность мебелью и бы/тех', 'из скачанного файла '],
  ['', 'Серия дома', 'из скачанного файла '],
  ['', 'Потолки', 'из скачанного файла '],
  ['', 'Лифт', 'из скачанного файла '],
  ['', 'Совмещ', 'из скачанного файла '],
  ['', 'плита', 'вношу свой комментарий после просмотра фото - газ или электр'],
  ['', 'СТМ', 'вношу свой комментарий после просмотра фото - старая стиралка или новая и где стоит'],
  ['', 'фото', 'примечание - оцениваю качество фото или его отсутствие, или неполноту предоставляемых видов'],
  ['', 'мебель на фото', 'вношу свой комментарий после просмотра фото '],
  ['', 'просторность, захламлённость', 'вношу свой комментарий после просмотра фото '],
]

export const vitaliksDataset = [
  ['roomNumber', 'Кмн', ''],
  ['areaTotal', 'О', ''],
  ['roomArea', 'Ж', ''],
  ['kitchenArea', 'Кх', ''],
  ['floor', 'Этаж', ''],
  ['elevator', 'лф', ''],
  ['elevatorAndFloor', 'лф', ''],

  ['ecologyOfLocation', 'д', ''],
  ['aesthetics', 'э', ''],
  ['trash', 'г', ''],
  ['fridge', 'х', ''],
  ['washingMachine', 'с', '2 - есть новая, 1 - есть старая СМА или любая не СМА, 0 - нет'],
  ['cooker', 'п', ' 2 - со стекл. пов., 1 - газовая или электро с хорошими характеристиками, 0 - электро с мет. канф.'],
  ['oven', 'дх', '1 - есть'],
  ['beds', 'сп м', '2 - двусп. кровать, 1 - ничего, норм. выгл. диван или односп. кровать, 0 - плохой диван или кровать'],

  ['timeToLocationA', 'Р', ''],
  ['timeToLocationB', 'Ш', ''],
  ['commuteTotal', 'Z', 'Сумма времени в пути до нескольких объектов'],

  ['rent', 'АП', ''],
  ['utilityCharges', 'КУ', ''],
  ['deposit', 'З', ''],
  ['feePercentage', 'К, 0..1', ''],
  ['depositParts', 'З / ?', ''],
  ['totalAmountPerMonth', 'Мес. пл.', ''],
  ['feeAmount', 'Комиссия', ''],
  ['totalAmountAtSignature', 'Z съ', ''],
  ['totalAmountPerYear', 'За год', ''],
]
export class VitaliksDataset {
  constructor(data) {
    const {
      roomNumber,
      area,
      buildingData,
      price,
      description,
      roomArea,
      // windowsFacing,
      // sanitaryFacilities,
      // kidsPetsAllowed,
      equipment,
      // residentialDevelopment,
      // buildingSeries,
      // height,
      elevator,
      // rubbishChute,
      link,
    } = data;

    this.link = { key: 'link', value: link.hyperlink, shortLabel: 'ссылка', description: '' }
    this.roomNumber = { key: 'roomNumber', value: roomNumber, shortLabel: 'Кмн', description: '' }

    const areaFigures = area.split('/').map((f) => Number(f))
    const roomAreaNum = Number(roomArea)
    // const roomAreasMatch = areaFigures[1] === roomAreaNum
    // if (areaFigures.length === 2 && areaFigures[1] !== roomAreaNum) {

    // }

    this.areaTotal = { key: 'areaTotal', value: areaFigures[0], shortLabel: 'О', description: '' }
    this.roomArea = { key: 'roomArea', value: roomAreaNum || areaFigures[1], shortLabel: 'Ж', description: '' }
    this.kitchenArea = { key: 'kitchenArea', value: areaFigures[2], shortLabel: 'Кх', description: '' }
    this.floor = { key: 'floor', value: Number(buildingData.substring(0, buildingData.indexOf('/'))), shortLabel: 'Этаж', description: '' }
    this.elevator = { key: 'elevator', value: elevator?.includes('Груз') ?? 0, shortLabel: 'лф', description: '' }
    this.elevatorAndFloor = { key: 'elevatorAndFloor', value: undefined, shortLabel: 'лф', description: '' }
    if (elevator) {
      this.elevatorAndFloor.value = 2
    } else if (this.floor <= 3) {
      this.elevatorAndFloor.value = 1
    } else {
      this.elevatorAndFloor.value = 0
    }

    this.ecologyOfLocation = { key: 'ecologyOfLocation', value: null, shortLabel: 'д', description: '' }
    this.aesthetics = { key: 'aesthetics', value: null, shortLabel: 'э', description: '' }
    this.trash = { key: 'trash', value: null, shortLabel: 'г', description: '' }

    this.fridge = { key: 'fridge', value: equipment.includes('Холодильник') ? 1 : 0, shortLabel: 'х', description: '' }
    this.washingMachine = { key: 'washingMachine', value: equipment.includes('Стиральная машина') ? 1 : 0, shortLabel: 'с', description: '2 - есть новая СМА, 1 - есть любая, 0 - нет' }
    this.cooker = { key: 'cooker', value: (/варочн/i.test(description) && 2) || (/газов.+плит/i.test(description) ?? 1) || 0, shortLabel: 'п', description: '2 - со стекл. пов., 1 - газовая или электро с хорошими характеристиками, 0 - электро с мет. канф.' }
    this.oven = { key: 'oven', value: /духов/i.test(description) ? 1 : 0, shortLabel: 'дх', description: '1 - есть' }
    this.beds = { key: 'beds', value: null, shortLabel: 'сп м', description: '2 - двусп. кровать, 1 - ничего, норм. выгл. диван или односп. кровать, 0 - плохой диван или кровать' }

    this.timeToLocationA = { key: 'timeToLocationA', value: null, shortLabel: 'Р', description: '' }
    this.timeToLocationB = { key: 'timeToLocationB', value: null, shortLabel: 'Ш', description: '' }
    this.commuteTotal = { key: 'commuteTotal', value: null, shortLabel: 'Z', description: 'Сумма времени в пути до нескольких объектов' }

    this.rent = { key: 'rent', value: Number(price.substring(0, price.indexOf('.0 руб.'))), shortLabel: 'АП', description: '' }
    this.utilityCharges = { key: 'utilityCharges', value: 3000, shortLabel: 'КУ', description: '' }

    const depositStart = price.indexOf('Залог - ') + 'Залог -'.length
    const depositEnd = price.indexOf(' руб.', depositStart)
    this.deposit = { key: 'deposit', value: Number(price.substring(depositStart, depositEnd)), shortLabel: 'З', description: '' }

    this.feePercentage = { key: 'feePercentage', value: null, shortLabel: 'К, 0..1', description: '' }
    this.depositParts = { key: 'depositParts', value: null, shortLabel: 'З / ?', description: '' }
    this.totalAmountPerMonth = { key: 'totalAmountPerMonth', value: null, shortLabel: 'Мес. пл.', description: '' }
    this.feeAmount = { key: 'feeAmount', value: null, shortLabel: 'Комиссия', description: '' }
    this.totalAmountAtSignature = { key: 'totalAmountAtSignature', value: null, shortLabel: 'Z съ', description: '' }
    this.totalAmountPerYear = { key: 'totalAmountPerYear', value: null, shortLabel: 'За год', description: '' }
  }
}
