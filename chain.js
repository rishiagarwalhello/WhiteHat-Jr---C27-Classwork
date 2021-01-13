class chain_class
{
    constructor(bodyA, bodyB)
    {
        var chain_pro=
        {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:10
        }

        this.chain=Constraint.create(chain_pro);
        World.add(world, this.chain);
    }
    display()
    {
        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}