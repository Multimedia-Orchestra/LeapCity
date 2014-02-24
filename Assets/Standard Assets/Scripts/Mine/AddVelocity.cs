using UnityEngine;
using System.Collections;

public class AddVelocity : MonoBehaviour {

	// Use this for initialization
	void Start () {
		rigidbody.velocity = transform.forward * 100;
	}
	
	// Update is called once per frame
	void Update () {
	}
}
