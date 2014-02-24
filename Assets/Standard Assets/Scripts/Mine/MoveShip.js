#pragma strict

function Start () {

}

function Update () {
	transform.position = Vector3(((Input.mousePosition.x-Screen.width/2)/Screen.width)*19,0,((Input.mousePosition.y-Screen.height/2)/Screen.height)*10);
	//print(Input.GetAxis("Mouse Y"));
}