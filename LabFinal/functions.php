<?php
	require_once('db.php');
	function validate($ID, $Password){
		$conn = getConnection();
		$sql = "select * from users where ID='{$id}' and Password='{$pass}'";
		$result = mysqli_query($conn, $sql);
		$user = mysqli_fetch_assoc($result);
		return count($user);
	}
	function register($Name,$Password,$Email,$Usertype){
		$conn = getConnection();
		$sql = "insert into users values('', '{$Name}','{${Password}','{$Email}',0)";
		if(mysqli_query($conn, $sql)){
			return true;
		}else{
			return false;
		}
	}
	function getAllUser(){
		$conn = getConnection();
		$sql = "select * from users";
		$result = mysqli_query($conn, $sql);
		$data = array();
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($data, $row);
		}
		return $data;
	}
	function deleteUser($ID){
		$conn = getConnection();
		$sql = "delete from users where ID=".$id;
		if(mysqli_query($conn, $sql)){
			return true;
		}else{
			return false;
		}
	}
?>