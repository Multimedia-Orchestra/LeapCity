#pragma strict

var Node : Transform;
var Row : Transform;
//var Row_NE : Transform;
//var Row_SE : Transform;
//var Row_S : Transform;
//var Row_SW : Transform;
private var playerObject : GameObject;
private var playerPos : Vector3;

//var Base : Transform;
//var myArray = new Array(Single_Tri_Lar,Single_Tri_Med,Single_Sq_Lar,Single_Sq_Med,Single_Hex_Lar,Single_Hex_Med);
function Start () {
	//var obj = Instantiate(Row_NW,Vector3(0,0,0),Quaternion.identity);
	//obj.transform.parent = transform;
	
	//obj = Instantiate(Row_N,Vector3(0,0,0),Quaternion.identity);
	//obj.transform.parent = transform;
	//Instantiate(Single_Tri_Lar,Vector3(0,0,0),Quaternion.identity);
	playerObject = GameObject.Find("Player");
	var x_local = 0;
	var y_local = 0;
	for (var x=-15;x<15;x++)
	{
		for (var y=-15;y<15;y++)
		{
			var height = Random.Range(4,12);
			y_local = transform.position.z+y*35.6;
			if(y%2 == 0)
			{
				x_local = transform.position.x+x*40;
			}
			else
			{
				x_local = transform.position.x+x*40+20;
			}
			Instantiate(Node,Vector3(x_local,0,y_local),Quaternion.identity);
			//Instantiate(Base,Vector3(x_local,-11.8,y_local),Quaternion.Euler(-90, 0, 0));
		}
	}
}

function drawRow_North(n : int)
{
	n = n+1;
	for (var x=1;x<n;x++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+x*(40),0,transform.position.z+n*17.8-89),Quaternion.identity);
	}
	for (var y=1;y<n;y++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+y*(40)-20,0,transform.position.z+n*17.8-53.4),Quaternion.identity);
	}
}

function drawRow_South(n : int)
{
	n = n+1;
	for (var x=1;x<n;x++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+x*(40),0,transform.position.z+n*(-17.8)+17.8),Quaternion.identity);
	}
	for (var y=1;y<n;y++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(-20)+y*(40)-20,0,transform.position.z+n*(-17.8)+53.4),Quaternion.identity);
	}
}
function drawRow_East(n : int)
{
	for (var x=0;x<n;x++)
	{
		Instantiate(Node,Vector3(transform.position.x+n*(40),0,transform.position.z+n*(-35.6)+x*(71.2)),Quaternion.identity);
		Instantiate(Node,Vector3(transform.position.x+n*(40)-20,0,transform.position.z+n*(-35.6)+x*(71.2)+35.6),Quaternion.identity);
	}
	//print(transform.position.x+n*(-35.6)+x*(71.2));
	//for (var y=0;y<n;y++)
	//{
	//	Instantiate(Node,Vector3(transform.position.x+n*(-20)+y*(40)-20,0,transform.position.z+n*(-17.8)+53.4),Quaternion.identity);
	//}
}
function drawRow_West(n : int)
{
	for (var x=0;x<n;x++)
	{
		Instantiate(Node,Vector3(transform.position.x-n*(40),0,transform.position.z+n*(-35.6)+x*(71.2)),Quaternion.identity);
		Instantiate(Node,Vector3(transform.position.x-n*(40)+20,0,transform.position.z+n*(-35.6)+x*(71.2)+35.6),Quaternion.identity);
	}
	//print(transform.position.x+n*(-35.6)+x*(71.2));
	//for (var y=0;y<n;y++)
	//{
	//	Instantiate(Node,Vector3(transform.position.x+n*(-20)+y*(40)-20,0,transform.position.z+n*(-17.8)+53.4),Quaternion.identity);
	//}
}



function Update () {
	var playerPos:Vector3 = playerObject.transform.position;
	if((playerPos.z-transform.position.z)>=71.2)
	{
		transform.position = Vector3(transform.position.x,0,transform.position.z+71.2);
		//Instantiate(Row,Vector3(transform.position.x,0,transform.position.z),Quaternion.identity);
		drawRow_North(30);
	}
	if((playerPos.z-transform.position.z)<=-71.2)
	{
		transform.position = Vector3(transform.position.x,0,transform.position.z-71.2);
		//Instantiate(Row,Vector3(transform.position.x,0,transform.position.z),Quaternion.identity);
		drawRow_South(30);
	}
	if((playerPos.x-transform.position.x)>=40)
	{
		transform.position = Vector3(transform.position.x+40,0,transform.position.z);
		//Instantiate(Row,Vector3(transform.position.x,0,transform.position.z),Quaternion.identity);
		drawRow_East(15);
	}
	if((playerPos.x-transform.position.x)<=-40)
	{
		transform.position = Vector3(transform.position.x-40,0,transform.position.z);
		//Instantiate(Row,Vector3(transform.position.x,0,transform.position.z),Quaternion.identity);
		drawRow_West(15);
	}
}