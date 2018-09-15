if (!isset($_SESSION))
{    
    session_start();
}    
if (isset($_POST) && !empty($_POST))
{  
$_SESSION['token'] = $_POST['token'];
}
$sessions = array();

$sessions['token'] = $_SESSION['token'];

header('Content-Type: application/json');
echo json_encode($sessions);