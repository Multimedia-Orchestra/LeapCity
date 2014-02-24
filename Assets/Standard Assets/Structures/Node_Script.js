var Single_Tri_Lar : Transform;
var Single_Tri_Med : Transform;
var Single_Sq_Lar : Transform;
var Single_Sq_Med : Transform;
var Single_Hex_Lar : Transform;
var Single_Hex_Med : Transform;

private var playerObject : GameObject;
private var playerPos : Vector3;


//var Node_Maker : Transform;

//var hasCreated = false;

function Start () {
	//hasCreated = false;
	//var playerObject = GameObject.Find("Player");
	//var playerPos:Vector3 = playerObject.transform.position;
	//var distance = Vector3.Distance(transform.position, playerPos);
	//if(distance<=464.4)
	//{
	//	hasCreated = true;
	//}
	//else if(distance<=500)
	//{
	//	print("hi");
	//}
	//if(distance<=500)
	//{
		//print(player.transform.position);
		playerObject = GameObject.Find("Player");
		var height = Random.Range(4,10)*2;
		for (var i=-height/2-1;i<height/2;i++)
		{
			var myIndex = Random.Range(0,9);
			var myHeight = Random.Range(1,5);
			for (var a=0;a<myHeight;a++)
			{
				if(myIndex==0)
				{
					obj = Instantiate(Single_Tri_Lar,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==1)
				{
					obj = Instantiate(Single_Tri_Med,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==2)
				{
					obj = Instantiate(Single_Sq_Lar,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==3)
				{
					obj = Instantiate(Single_Sq_Med,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==4)
				{
					obj = Instantiate(Single_Hex_Lar,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==5)
				{
					obj = Instantiate(Single_Hex_Med,Vector3(transform.position.x,(a+i)*11.8,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==6)
				{
					obj = Instantiate(Single_Sq_Lar,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==7)
				{
					obj = Instantiate(Single_Sq_Med,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==8)
				{
					obj = Instantiate(Single_Hex_Lar,Vector3(transform.position.x,(a+i)*11.7,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				if(myIndex==9)
				{
					obj = Instantiate(Single_Hex_Med,Vector3(transform.position.x,(a+i)*11.8,transform.position.z),Quaternion.Euler(-90, 0, 0));
				}
				obj.transform.parent = transform;
			}
			i = i + myHeight-1;
		}
	//}
	//else
	//{
	//	Destroy(gameObject);
	//}
}

function Update () {
	var playerPos:Vector3 = playerObject.transform.position;
	if((transform.position.z-playerPos.z)<(-605.2))
	{
		Destroy(gameObject);
	}
	if((transform.position.z-playerPos.z)>(605.2))
	{
		Destroy(gameObject);
	}
	if(Mathf.Abs(transform.position.x-playerPos.x)>600)
	{
		Destroy(gameObject);
	}
	//var playerObject = GameObject.Find("Player");
	//var playerPos:Vector3 = playerObject.transform.position;
	//distance = Vector3.Distance(transform.position, playerPos);
	//if(distance>500)
	//{
	//	Destroy (gameObject);
	//}
//	if(hasCreated == false)
//	{
//		if(distance<464.4)
//		{
//			toTarget = playerPos - transform.position;
//			toTarget.Normalize();
//			dir = Vector3.Dot(toTarget,Vector3(0,0,1));
//			if(dir<0)
//			{
//				angleTarget = 360 - Vector3.Angle(toTarget, Vector3(0,0,1));
//			}
//			else
//			{
//				angleTarget = Vector3.Angle(toTarget, Vector3(0,0,1));
//			}
			//print(angleTarget);
//			if(angleTarget<=300&&angleTarget<360)
//			{
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x-20,0,transform.position.z+35.6),Quaternion.identity);
//			}
//			if(angleTarget<=0&&angleTarget<60)
//			{
//				print("hi");
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x+20,0,transform.position.z+35.6),Quaternion.identity);
//			}
//			if(angleTarget<=60&&angleTarget<120)
//			{
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x+40,0,transform.position.z),Quaternion.identity);
//			}
//			if(angleTarget<=120&&angleTarget<180)
//			{
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x+20,0,transform.position.z-35.6),Quaternion.identity);
//			}
//			if(angleTarget<=180&&angleTarget<240)
//			{
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x-20,0,transform.position.z-35.6),Quaternion.identity);
//			}
//			if(angleTarget<=240&&angleTarget<300)
//			{
//				hasCreated = true;
//				Instantiate(Node_Maker,Vector3(transform.position.x-40,0,transform.position.z),Quaternion.identity);
//			}
//		}
//	}
}