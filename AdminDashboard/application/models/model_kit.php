<?php

class Model_Kit extends Model
{
	private $data;
	private $dbconn;
	
	public function get_data()
	{	
	
		$this->dbconn=new mysqli(DBoutput::$dbHost, DBoutput::$mysql_user, DBoutput::$mysql_password, DBoutput::$my_db); 		
		$result = mysqli_query($this->dbconn,"SELECT * FROM `obj_owner_furnitur`");	
		if (mysqli_num_rows($result) > 0) {//есть запись 			
			while ($row = mysqli_fetch_assoc($result)) {			
				$this->data[] = $row; 
			}
			mysqli_free_result($result);
			mysqli_close($this->dbconn);
			return $this->data;
		}	
	}

}