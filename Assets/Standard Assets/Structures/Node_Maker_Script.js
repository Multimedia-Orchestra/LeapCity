#pragma strict

var Node : Transform;

function Start () {
	Instantiate(Node,transform.position,Quaternion.identity);
}

function Update () {
	Destroy(gameObject);
}