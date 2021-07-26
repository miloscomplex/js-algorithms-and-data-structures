
class HashTable {
  constructor(size=17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if(this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i=0; i < this.keysMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(keys.includes(this.keyMap[i][j][1])) {
              keys.push(this.keysMap[i][0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i=0; i < this.keysMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(values.includes(this.keyMap[i][j][1])) {
              values.push(this.keysMap[i][1]);
          }
        }
      }
    }
    return values;
  }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
