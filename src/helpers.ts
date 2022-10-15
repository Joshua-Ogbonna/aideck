import moment from "moment"

export const dateFormatter = (date: string) => {
    return moment(date).format("MMM Do YY")
}

export const getPercentDone = (target: number, amountRaised: number) => {
    return Math.floor((amountRaised / target) * 100);
};

export const imageURLConverter = (image: Blob | MediaSource) => {
    return URL.createObjectURL(image)
}