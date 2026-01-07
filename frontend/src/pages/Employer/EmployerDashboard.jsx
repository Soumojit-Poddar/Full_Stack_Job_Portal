import { useEffect, useState } from "react";
import {
  Plus,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import moment from "moment";
import { useNavigate, useNavigation } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import DashboardLayout from "../../components/layout/DashboardLayout";

const EmployerDashboard = () => {

  const useNavigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading]=useState(null);

  const getDashboardOverview  = async()=> {
    try{
      setIsLoading(true);
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVERVIEW);
      if(response.status === 200){
        setDashboardData(response.data);
      }
    }catch(error){
      console.log("error");
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getDashboardOverview();
    return ()=> {};
  }, []);

  return (
    <DashboardLayout activeMenu='employer-dashboard'>

    </DashboardLayout>
  )
}

export default EmployerDashboard



