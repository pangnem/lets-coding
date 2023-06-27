import DiscountPolicy from "../discount/DiscountPolicy";
import NoneDiscountPolicy from "../discount/NoneDiscountPolicy";

export default class Movie {
    private name: string;
    private fee: number;
    private discountPolicy: DiscountPolicy = new NoneDiscountPolicy();


    constructor(name: string, fee: number) {
        this.name = name;
        this.fee = fee;
    }

    calculateFee() {
        return this.discountPolicy.apply(this.fee);
    }

    /**
     * 할인 정책을 변경합니다.
     */
    changeDiscountPolicy(discountPolicy: DiscountPolicy) {
        this.discountPolicy = discountPolicy;
    }
}
