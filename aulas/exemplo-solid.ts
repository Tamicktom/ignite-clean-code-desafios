
interface PaymentMethod {
  getDiscountAmount(amount: number): number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class CreditCard implements PaymentMethod {
  private installments: number;

  constructor(installments: number) {
    this.installments = installments;
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.10;
    }

    if (this.installments <= 6) {
      return amount * 0.05;
    }

    return 0;
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.15;
  }
}

class CalculateOrderDiscount {
  public execute(amount: number, paymentMethod: PaymentMethod): number {
    return paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount();

console.log(calculateOrderDiscount.execute(100, new Billet()));
