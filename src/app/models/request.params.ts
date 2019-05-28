export interface OptionalParam {
    param: string,
    value: string
}

export interface RequestParams {
    root: string[],
    'aff-option': string[],
    agent: string[],
    patient: string[],
    optional?: OptionalParam[]
}