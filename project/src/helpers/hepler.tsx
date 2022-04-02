
// 80% --> 4*
export const getRatingFromPercentagesToStart = (rating: number) => (rating / 100 * 5).toFixed(1);


// 2.5 --> 50%
export const getRatingFromFloatToPercentages = (rating: number) => (rating * 100 / 5).toFixed(0);


export const gerRandomNumber = (number = 1200) => Math.random() * number;
