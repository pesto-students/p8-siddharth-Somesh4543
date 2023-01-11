const customPromiseState = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED"
}

class customPromise {
  constructor(fn) {
    this.customPromiseState = customPromiseState.PENDING;
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFn = null;
    this.cathchFn = null;
    fn(this.resolver, this.rejector);
  }
  resolver(resolverData) {
    if(this.customPromiseState === customPromiseState.PENDING){
        this.then && this.thenFn(resolverData);
    }
    this.customPromiseState = customPromiseState.RESOLVED;
  }
  rejector(rejectorData) {
    if(this.customPromiseState === customPromiseState.PENDING){
    this.then && this.cathchFn(rejectorData);
    }
    this.customPromiseState = customPromiseState.REJECTED;
  }
  then(thenFn) {
    this.thenFn = thenFn;
    return this;
  }
  catch(cathchFn) {
    this.catchFn = cathchFn;
    return this;
  }
}

const getNumber = () =>
  new Promise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with num: ${randomNumber}`);
      }
      res(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
  });

const clickHandler = () => {
  display("Loading...");
  const numberPromise = getNumber();
  numberPromise.then(display).catch(display);
};

const display = (content) => {
  text.innerText = content;
};

button.addEventListener("click", clickHandler);
