export class dbClass{

  attributeTypeHash :{};
  attributeArray :any[];

  populateAttributeArray(obj: any):any{
    this.attributeArray = Object.keys(obj);
  };

  selectSpecificAttributes(attrs: string[]){
    for (var i = 0; i < this.attributeArray.length; ++i) {
      if (attrs.includes(this.attributeArray[i])) {
        this.attributeArray.splice(i,1);
        i--;
      }
    }
  };

  populateAttributeTypeHash(obj):any{
    this.attributeTypeHash = {};
    for(let k of this.attributeArray) {
      this.attributeTypeHash[k] = typeof(obj[k]);
    }
  }

}