function generateName (){
    const domain = "hei.school" ;
    let nameOfDomain =  ["www" , "api" ,"front" ,"back"]  ;
    let domainName = [] ; 
    for (const name of nameOfDomain) {
        let generate  = name + "." + domain ; 
        domainName.push(generate) ;

    }
    return domainName ; 

}
