#pragma strict

var player : GameObject;
var speed : float;

private var deltaX : float;
private var deltaZ : float;

function Start () {
	speed = 50;
	deltaX = Random.Range(-1.0,1.0);
	deltaZ = Random.Range(-1.0,1.0);
	rigidbody.velocity = new Vector3(Random.Range(-1.0,1.0),0,Random.Range(-1.0,1.0)).normalized * speed;
}

function Update ()
{
	if(Mathf.Abs(transform.position.x-player.transform.position.x)>=500
		|| Mathf.Abs(transform.position.z-player.transform.position.z)>=500)
	{
		rigidbody.velocity = new Vector3(player.transform.position.x-transform.position.x,
										0,
										player.transform.position.z-transform.position.z).normalized * speed;
	}
	/*
	else if (Mathf.Abs(transform.position.y)>=150)
	{
		var dir = rigidbody.velocity.y/Mathf.Abs(rigidbody.velocity.y);
		transform.position.y -= dir*5;
		var zx_angle = Mathf.Atan(rigidbody.velocity.z/rigidbody.velocity.x);
		rigidbody.velocity = new Vector3(Mathf.Cos(zx_angle)*75,-dir*25,Mathf.Sin(zx_angle)*75).normalized * speed;
	}
	*/
	else
	{
		rigidbody.velocity = new Vector3(rigidbody.velocity.x + deltaX,
			0,
			rigidbody.velocity.z + deltaZ).normalized * speed;
			
		deltaX += Random.Range(-0.10,0.10);
		deltaZ += Random.Range(-0.10,0.10);
	}
	transform.rotation = Quaternion.LookRotation(rigidbody.velocity, Vector3.up);
	
	speed = 50 - 10*(1.0f/Vector3.Distance(transform.position,player.transform.position));
}