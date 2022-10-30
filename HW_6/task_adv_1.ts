const gameResult2: {
  team1: string;
  team2: string;
  matchResult: string;
  penalty?: string;
  changeFormat: Function;
} = {
  team1: "liverpool",
  team2: "chelsea",
  matchResult: "1:1",
  penalty: "10:11",
  changeFormat: function (): void {
    const goals = this["matchResult"];
    const res = goals.split(":")[0];
    const res2 = goals.split(":")[1];
    if (+res > 9 || +res2 > 9) {
      console.log("Неверные результаты");
    } else
      console.log(
        `Команда ${this.team1} забила ${res} голов,а команда ${this.team2} забила ${res2} голов.`
      );
    const find = Object.keys(this).includes("penalty");
    if (find) {
      const penResult = this["penalty"];
      console.log("Результат пенальти: " + penResult);
    } else {
      console.log("Пенальти не было");
    }
    if (res === res2) {
      console.log("Ничья");
    } else if (res > res2) {
      console.log("Выиграла команда " + this.team1);
    } else if (res < res2) {
      console.log("Выиграла команда " + this.team2);
    }
  },
};
gameResult2.changeFormat();