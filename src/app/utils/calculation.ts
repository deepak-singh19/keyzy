export const target_price = (a: number, b: number): number => a * (1 - 1/b);

export const total_monthly_rent =(a: number, b:number): number=> a + b;

export const rent =(a:number, b:number):number=> a / 12 * (1/b);

export const converted_rent = (a:number, b:number, c:number):number=> a / (12 * (1/b) * (1/c));

export const future_buy_back_price =(a:number, b:number, c:number):number=> a - (b * c * 12)

