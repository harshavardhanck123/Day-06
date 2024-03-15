class uber{
    constructor(distance,ridetype)
    {
        this.distance=distance
        this.ridetype=ridetype
    }
    calc()
    {
        const base=50;
        const perKM=18;
        const type="XL"
        var res=base+(this.distance*perKM)
        if(this.ridetype=="XL")
        {
            res*=1.2;
        }
        else if(this.ridetype=="Black")
        {
            res*=1.5;
        }
        return res;
    }
}
var price=new uber(20,"XL")
var final=price.calc()
console.log(final)
