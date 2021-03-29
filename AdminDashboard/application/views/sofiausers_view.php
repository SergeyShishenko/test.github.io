<section class="panel" id="SofiaUsers">
    <header class="panel-heading">
        <div class="panel-actions">
            <a href="#" class="panel-action panel-action-toggle" data-panel-toggle=""></a>
            <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss=""></a>
        </div>

        <h2 class="panel-title">Sofia Users</h2>
    </header>
    <div class="panel-body" style="display: block;">
        <table class="table table-bordered table-striped table-condensed mb-none">
            <thead>
                <tr>
                    <!-- <th class="text-right hidden-xs hidden-sm">user_sofia_id</th> -->
                    <th class="">id</th>
                    <th class="hidden-xs hidden-sm">user_login</th>
                    <th class="hidden-xs hidden-sm">user_mail</th>
                    <th class="text-right">user_role</th>                    
                    <th class="text-right hidden-xs">user_last_page</th>
                    <th class="text-right">user_sess_date_start</th>
                  
                </tr>
            </thead>
            <tbody>
                <?php

                // var_dump($data);exit();
            //    echo  count($data);exit();

	foreach($data as $row)
	{
		echo 
		'<tr>
            <td class="">'.$row['user_sofia_id'].'</td>
			<td>'.$row['user_login'].'</td>
			<td class="hidden-xs hidden-sm">'.$row['user_mail'].'.</td>
			<td class="text-right">'.$row['user_role'].'</td>			
			<td class="text-right hidden-xs">'.$row['user_last_page'].'</td>
			<td class="text-right hidden-xs">'.$row['user_sess_date_start'].'</td>
		
		</tr>';
	}
	
?>
            </tbody>
        </table>
    </div>
</section>