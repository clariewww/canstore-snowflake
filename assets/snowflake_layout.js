(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.CANSTORE_SNOWFLAKE=api;
})(typeof window==='object'?window:globalThis,function(){
  'use strict';
  function layoutOutputs(outputs,{cx=450,cy=414,scopeForOutput=o=>o.scope||`Unassigned · ${o.subteam.replaceAll(';',' + ')}`}={}){
    const groups=new Map();
    [...outputs].sort((a,b)=>Number(a.publication_id)-Number(b.publication_id)).forEach(o=>{
      const scope=scopeForOutput(o);if(!groups.has(scope))groups.set(scope,[]);groups.get(scope).push(o);
    });
    const ordered=[...groups].flatMap(([scope,items])=>items.sort((a,b)=>a.year-b.year||Number(a.publication_id)-Number(b.publication_id)).map(output=>({scope,output})));
    const capacity=Math.ceil(outputs.length/6),positions=new Map(),arms=[];
    // Local coordinates follow a shaft and its +/-60-degree branchlets.
    // Arms are spatial containers, not research categories or causal links.
    const slots=[];
    for(const [base,lengths] of [[145,[50,100]],[215,[52,104]],[285,[38,78]]])
      for(const side of [-1,1])for(const length of lengths)slots.push({base,side,length});
    slots.push({base:376,side:0,length:0});
    if(capacity>slots.length)throw new RangeError('This snow crystal layout supports up to 78 outputs.');
    for(let arm=0;arm<6;arm++){
      const angle=-Math.PI/2+arm*Math.PI/3;
      const project=(along,across)=>[cx+Math.cos(angle)*along-Math.sin(angle)*across,cy+Math.sin(angle)*along+Math.cos(angle)*across];
      const items=ordered.slice(arm*capacity,(arm+1)*capacity);
      const extension=[0,7,-4,3,-5,5][arm];
      arms.push({angle,project,ids:items.map(i=>i.output.publication_id)});
      items.forEach(({scope,output},index)=>{
        const slot=slots[index],base=slot.base+extension;
        const [sx,sy]=project(base,0);
        const [x,y]=project(base+slot.length*.5,slot.side*slot.length*Math.sqrt(3)/2);
        positions.set(output.publication_id,{x,y,sx,sy,base,arm,scope,radius:13.5,
          angle:Math.atan2(y-cy,x-cx),controlAngle:angle});
      });
    }
    const labels=[...groups].map(([scope,items])=>{
      const p=items.map(o=>positions.get(o.publication_id));
      const x=p.reduce((s,p)=>s+p.x-cx,0),y=p.reduce((s,p)=>s+p.y-cy,0);
      return {scope,count:items.length,angle:Math.atan2(y,x)};
    });
    // Separate nearby scope captions around the perimeter, including the wrap.
    labels.sort((a,b)=>a.angle-b.angle);
    for(let pass=0;pass<80;pass++)for(let i=0;i<labels.length;i++){
      const a=labels[i],b=labels[(i+1)%labels.length];
      const gap=b.angle+(i===labels.length-1?Math.PI*2:0)-a.angle;
      if(gap<.32){const shift=(.32-gap)/2;a.angle-=shift;b.angle+=shift;}
    }
    return {positions,labels,arms};
  }
  return {layoutOutputs};
});
