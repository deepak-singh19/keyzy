export const target_price = (a: number, b: number): number => a * (1 - b/100);

export const total_monthly_rent =(a: number, b:number): number=> a + b;

export const rent =(a:number, b:number):number=> a / 12 * (b/100);

export const converted_rent = (a:number, b:number, c:number):number=> a / 12 * (b/100) * (c/100);

export const future_buy_back_price =(a:number, b:number, c:number):number=> a - (b * c * 12)

