#pragma strict

  function OnTriggerEnter (other : Collider)
 {
 	if(other.name != "Cube")
 	{
 		Destroy(other.gameObject);
 		Destroy(this);
 	}
 }