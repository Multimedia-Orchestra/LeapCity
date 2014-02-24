#pragma strict

var Node : Transform;


//var Base : Transform;

//var myArray = new Array(Single_Tri_Lar,Single_Tri_Med,Single_Sq_Lar,Single_Sq_Med,Single_Hex_Lar,Single_Hex_Med);
function Start () {
	var n = 30;
	for (var x=1;x<n;x++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+x*(40),0,transform.position.z+n*17.8-71.2),Quaternion.identity);
	}
	for (var y=1;y<n;y++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+y*(40)-20,0,transform.position.z+n*17.8-35.6),Quaternion.identity);
	}
	//Instantiate(Single_Tri_Lar,Vector3(0,0,0),Quaternion.identity);
//	var x_local = 0;
//	var y_local = 0;
//	for (var x=-15;x<15;x++)
//	{
//		for (var y=-15;y<15;y++)
//		{
//			var height = Random.Range(4,12);
//			y_local = transform.position.z+y*35.6;
//			if(y%2 == 0)
//			{
//				x_local = transform.position.x+x*40;
//			}
//			else
//			{
//				x_local = transform.position.x+x*40+20;
//			}
//			Instantiate(Node,Vector3(x_local,0,y_local),Quaternion.identity);
			//Instantiate(Base,Vector3(x_local,-11.8,y_local),Quaternion.Euler(-90, 0, 0));
	//	}
	//}
}

function Update () {

}