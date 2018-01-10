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

  populateAttributeTypeHash(obj:any):any{
    this.attributeTypeHash = {};
    for(let k of this.attributeArray) {
      this.attributeTypeHash[k] = typeof(obj[k]);
    }
  }

  transformNullValues(obj:any):any{
    for (var i = 0; i < this.attributeArray.length; ++i) {
      var something = this.attributeArray[i];
        if(obj[something] == null){
          this.attributeTypeHash[something] = 'string';
        }
    }
  }

}