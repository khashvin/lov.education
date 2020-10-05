export const REQUEST = (actionType: string) => `${actionType}#PENDING`;
export const SUCCESS = (actionType: string) => `${actionType}#FULFILLED`;
export const FAILURE = (actionType: string) => `${actionType}#REJECTED`;

export const getActionType = (actionType: string) => {
    const actionStatus = actionType.split('#');
    return actionStatus[1];
};