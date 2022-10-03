export interface ISchedules {
  _id?: string;
  date: number;
  is_giving_up_training: boolean; // 是否放弃今天的训练
  snap_card_id: string; // 使用的卡片id快照,为了能够实现替换未来相关卡片
  snap_card_name: string;
  /**
   * 具体要做的动作，以及每组具体做的内容
   */
  action_list: ActionList;
}
export enum ActionDetailType {
  warnUp,
  formal
}

type ActionList = Array<
  ITrainItem & {
    detail_list: Array<{
      weight: number;
      repeat: number;
      type: ActionDetailType;
    }>;
  }
>;
export enum TrainType {
  Shoulder,
  Chest,
  Back,
  Leg,
  Hip,
  Arm,
}
export interface ITrainItem {
  name: string; // 训练项目名称
  type: TrainType; // 类型
  weight: number; // 重量
  weight_unit: WeightUnit; // 重量单位
  group_num: number; // 组数
  repeat: number; // 重复次数
}
export enum WeightUnit {
  Lb,
  Kg,
}
