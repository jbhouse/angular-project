export class dbClass{

  attributeTypeHash :{};
  attributeArray :any[];

  populateAttributeArray():any{
    this.attributeArray = Object.keys(this);
  }

  populateAttributeTypeHash():any{
    this.attributeTypeHash = {};
    for(let k of this.attributeArray) {
      this.attributeTypeHash[k] = typeof(this[k]);
    }
  }

}