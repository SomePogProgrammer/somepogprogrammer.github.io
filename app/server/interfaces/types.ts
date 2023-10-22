/**  @type > Type for Primary DB API */
export type Job_Requests = {
    yourCompany: string
    contactType: string
    contacts: string
    jobDescription: string
    roleOfJob: string
    jobType: string
    hours: string
    paymentMethod: string
    payment: string,
    _id: string | any
};

/**  @type > Type for Primary DB API */
export type Interview_Requests = {

};

/** @type > Error Message */
export type ResponseError = {
    message: string
}