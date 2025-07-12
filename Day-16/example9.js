let findArea = (dim1,dim2,area)=>{
area = area(dim1,dim2);
console.log("Area: "+area);    
}
findArea(2,3,(dim1,dim2)=>(dim1*dim2));
findArea(2,3,(dim1,dim2)=>(0.5*dim1*dim2));