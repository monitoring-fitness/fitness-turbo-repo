import {ActionDetailType, ISchedules, TrainType, WeightUnit} from "../entity/schedule";

export type GetCurDailyRes = Omit<ISchedules, 'snap_card_id' | 'snap_card_name'>

export const get_cur_daily: GetCurDailyRes = {
    _id: '0',
    date: 0,
    is_giving_up_training: false,
    action_list: [
        {
            name: '哑铃硬拉',
            type: TrainType.Back,
            weight: 40,
            weight_unit: WeightUnit.Kg,
            group_num: 3,
            repeat: 8,
            detail_list: [
                {
                    weight: 40,
                    repeat: 8,
                    type: ActionDetailType.warnUp
                },
                {
                    weight: 40,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
            ]
        },
        {
            name: '高位下拉',
            type: TrainType.Back,
            weight: 60,
            weight_unit: WeightUnit.Kg,
            group_num: 3,
            repeat: 8,
            detail_list: [
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.warnUp
                },
                {
                    weight: 60,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 60,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 60,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
            ]
        },
        {
            name: '哑铃划船',
            type: TrainType.Back,
            weight: 50,
            weight_unit: WeightUnit.Kg,
            group_num: 3,
            repeat: 8,
            detail_list: [
                {
                    weight: 40,
                    repeat: 8,
                    type: ActionDetailType.warnUp
                },
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 50,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
            ]
        },
        {
            name: '直臂下压',
            type: TrainType.Back,
            weight: 20,
            weight_unit: WeightUnit.Kg,
            group_num: 3,
            repeat: 8,
            detail_list: [
                {
                    weight: 15,
                    repeat: 8,
                    type: ActionDetailType.warnUp
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
            ]
        },
        {
            name: '二头弯矩',
            type: TrainType.Back,
            weight: 20,
            weight_unit: WeightUnit.Kg,
            group_num: 3,
            repeat: 8,
            detail_list: [
                {
                    weight: 15,
                    repeat: 8,
                    type: ActionDetailType.warnUp
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
                {
                    weight: 20,
                    repeat: 8,
                    type: ActionDetailType.formal
                },
            ]
        },
    ],
}